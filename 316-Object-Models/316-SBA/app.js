// Sample data
const notes = [
    { id: 1, title: 'Introduction to JavaScript', content: 'JavaScript is a programming language...' },
    // Add more notes
];

const quizzes = [
    { id: 1, category: 'JavaScript Basics', questions: ['What is JavaScript?', 'How to declare a variable?'] },
    // Add more quizzes
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

// Initial load (show notes by default)
showNotes();
