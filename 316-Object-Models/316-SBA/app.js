// Sample data
let notes = JSON.parse(localStorage.getItem('notes')) || [
    { id: 1, title: 'Introduction to JavaScript', content: 'JavaScript is a programming language...' },
];

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
    { id: 1, question: 'What is JavaScript?', answer: 'JavaScript is a scripting language...' },
];

// Function to show notes as gallery
function showNotes() {
    const notesListDiv = document.getElementById('notesList');
    notesListDiv.innerHTML = '';

    // Create HTML for notes gallery
    const notesHTML = notes.map(note => `
        <div class="note" onclick="expandNote(${note.id})" data-id="${note.id}">
            <h2>${note.title}</h2>
        </div>`
    ).join('');

    // Append notes HTML to the notes list container
    notesListDiv.innerHTML = notesHTML;
}

// Function to expand and show full content of a note
function expandNote(noteId) {
    const note = notes.find(note => note.id === noteId);
    alert(`Note: ${note.title}\n\n${note.content}`);
}

// Function to show flash cards
function showFlashCards() {
    const flashCardsListDiv = document.getElementById('quizzesList');
    flashCardsListDiv.innerHTML = '';

    // Create HTML for flash cards
    const flashCardsHTML = flashcards.map(flashcard => `<div class="flash-card" onclick="flipFlashCard(${flashcard.id})" data-id="${flashcard.id}">
    <div class="question">${flashcard.question}</div>
    <div class="answer" style="display: none;">${flashcard.answer}</div>
</div>`
    ).join('');

    // Append flash cards HTML to the flash cards list container
    flashCardsListDiv.innerHTML = flashCardsHTML;
}

// Function to flip and show the answer of a flash card
function flipFlashCard(flashcardId) {
    const flashCard = document.querySelector(`.flash-card[data-id="${flashcardId}"]`);
    const answer = flashCard.querySelector('.answer');

    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// Function to handle form submission for adding a new note
function addNote() {
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');

    const newNote = {
        id: notes.length + 1,
        title: titleInput.value,
        content: contentInput.value,
    };

    notes.push(newNote);

    // Update the UI to show notes
    showNotes();

    // Clear the input fields
    titleInput.value = '';
    contentInput.value = '';

    // Save notes to localStorage
    saveNotesToLocalStorage();
}

// Function to handle form submission for adding a new flash card
function addFlashCard() {
    const questionInput = document.getElementById('flashCardQuestion');
    const answerInput = document.getElementById('flashCardAnswer');

    const newFlashCard = {
        id: flashcards.length + 1,
        question: questionInput.value,
        answer: answerInput.value,
    };

    flashcards.push(newFlashCard);

    // Update the UI to show flash cards
    showFlashCards();

    // Clear the input fields
    questionInput.value = '';
    answerInput.value = '';

    // Save flash cards to localStorage
    saveFlashCardsToLocalStorage();
}

// Function to save notes to localStorage
function saveNotesToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from localStorage
function loadNotesFromLocalStorage() {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
        notes = storedNotes;
        showNotes(); // Add this line to display notes on load
    }
}

// Function to save flash cards to localStorage
function saveFlashCardsToLocalStorage() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

// Function to load flash cards from localStorage
function loadFlashCardsFromLocalStorage() {
    const storedFlashCards = JSON.parse(localStorage.getItem('flashcards'));
    if (storedFlashCards) {
        flashcards = storedFlashCards;
        showFlashCards(); // Add this line to display flash cards on load
    }
}

// Initial load (show notes by default)
loadNotesFromLocalStorage();
loadFlashCardsFromLocalStorage();
