/* script.js */
let flashcards = [];
let score = 0;

function addFlashcard() {
    let question = document.getElementById('question').value;
    let answer = document.getElementById('answer').value;
    if (question && answer) {
        flashcards.push({ question, answer });
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
        renderFlashcards();
    }
}

function renderFlashcards() {
    let container = document.getElementById('flashcards');
    container.innerHTML = '';
    flashcards.forEach((card, index) => {
        let div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<p>${card.question}</p><p class='hidden'>${card.answer}</p>`;
        div.onclick = function() {
            let answerElem = div.querySelector('p.hidden');
            if (answerElem) {
                answerElem.classList.toggle('hidden');
                if (!answerElem.classList.contains('hidden')) {
                    let userAnswer = prompt("Enter your answer:");
                    if (userAnswer && userAnswer.toLowerCase() === card.answer.toLowerCase()) {
                        score++;
                        document.getElementById('score').innerText = `Score: ${score}`;
                    }
                }
            }
        };
        container.appendChild(div);
    });
}