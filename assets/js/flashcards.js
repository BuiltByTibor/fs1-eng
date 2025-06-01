document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the derivative of sin(x)?",
            answer: "The derivative of sin(x) is cos(x)"
        },
        // Add more flashcards here
    ];

    let currentCard = 0;
    const flashcardElement = document.querySelector('.flashcard');
    
    function showCard(index) {
        const card = flashcards[index];
        flashcardElement.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h3>${card.question}</h3>
                    <p>Click to flip</p>
                </div>
                <div class="flashcard-back">
                    <h3>${card.answer}</h3>
                    <div class="flashcard-actions">
                        <button class="btn btn-outline" onclick="rateCard('easy')">Easy</button>
                        <button class="btn btn-outline" onclick="rateCard('hard')">Hard</button>
                    </div>
                </div>
            </div>
        `;
    }

    window.rateCard = (rating) => {
        // In a real implementation, you would track spaced repetition here
        currentCard = (currentCard + 1) % flashcards.length;
        showCard(currentCard);
    };

    showCard(0);
});
