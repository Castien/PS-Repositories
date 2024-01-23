const colors = [
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink'
];

const gameBoard = document.getElementById('game-board');

let selectOne = null;
let selectTwo = null;
let lockBoard = false; // Prevents further card clicks while cards are compared

let matches = 0; // Counter to keep track of matched pairs

function createBoard() {
  const tableBody = document.createElement('tbody');
  const colorIndices = shuffle(Array.from({ length: 14 }, (_, i) => i % 7));

  for (let i = 0; i < 2; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      cell.classList.add('game-card');
      cell.dataset.color = colors[colorIndices[i * 7 + j]];
      row.appendChild(cell);

      cell.addEventListener('click', clickCard);
    }
    tableBody.appendChild(row);
  }
  gameBoard.appendChild(tableBody);
}

function clickCard(event) {
  if (lockBoard) return; // Do nothing if the board is locked

  const clickedCard = event.target;
  if (!selectOne) {
    selectOne = clickedCard;
    selectOne.style.backgroundColor = getColorForCard(selectOne);
    selectOne.removeEventListener('click', clickCard);
  } else if (!selectTwo && selectOne !== clickedCard) {
    selectTwo = clickedCard;
    selectTwo.style.backgroundColor = getColorForCard(selectTwo);
    selectTwo.removeEventListener('click', clickCard);

    lockBoard = true; // Lock the board to prevent further clicks during comparison
    setTimeout(checkMatch, 1000);
  }
}

function getColorForCard(card) {
  return card.dataset.color !== '' ? card.dataset.color : getRandomColor();
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function checkMatch() {
  const color1 = selectOne.style.backgroundColor;
  const color2 = selectTwo.style.backgroundColor;

  if (color1 === color2) {
    selectOne.dataset.color = color1;
    selectTwo.dataset.color = color2;

    selectOne = null;
    selectTwo = null;

    lockBoard = false; // Unlock the board after successful match
    matches++;
    checkComplete();
  } else {
    // No match, hide the revealed cards after a short duration
    setTimeout(() => {
      selectOne.style.backgroundColor = '';
      selectTwo.style.backgroundColor = '';

      selectOne.addEventListener('click', clickCard);
      selectTwo.addEventListener('click', clickCard);

      selectOne = null;
      selectTwo = null;

      lockBoard = false; // Unlock the board after hiding cards
    }, 1000);
  }
}

function checkComplete() {
  if (matches === 7) { // Assuming there are 14 cards, so 7 pairs for completion
    alert('You win!');
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

createBoard();
