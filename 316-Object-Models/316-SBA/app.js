// Sample data
let notes = JSON.parse(localStorage.getItem('notes')) || [
    { id: 1, title: 'Introduction to JavaScript', content: 'JavaScript is a programming language...' },
];

const quizzes = [
    { id: 1, category: 'JavaScript Basics', questions: ['What is JavaScript?', 'How to declare a variable?'] },
];

// Function to show notes
function showNotes() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Create HTML for notes
    const notesHTML = notes.map(note => `<div class="note"><h2>${note.title}</h2><p>${note.content}</p></div>`).join('');
    contentDiv.innerHTML = notesHTML;
}

// Function to show quizzes
function showQuizzes() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Create HTML for quizzes
    const quizzesHTML = quizzes.map(quiz => `<div class="quiz"><h2>${quiz.category}</h2><ul>${quiz.questions.map(question => `<li>${question}</li>`).join('')}</ul></div>`).join('');
    contentDiv.innerHTML = quizzesHTML;
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

    // Update the UI to show the new note
    showNotes();

    // Clear the input fields
    titleInput.value = '';
    contentInput.value = '';

    // Save notes to localStorage
    saveNotesToLocalStorage();
}

// Function to save notes to localStorage
function saveNotesToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Initial load (show notes by default)
showNotes();
