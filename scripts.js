// Diamond Clicker Logic
let diamonds = 0;
document.getElementById('click-diamond')?.addEventListener('click', () => {
    diamonds++;
    document.getElementById('diamond-count').textContent = diamonds;
});

// Cat Clicker Logic
let cats = 0;
document.getElementById('click-cat')?.addEventListener('click', () => {
    cats++;
    document.getElementById('cat-count').textContent = cats;
});

// Random Facts Logic
const facts = [
    "Cats have five toes on their front paws, but only four toes on their back paws.",
    "Diamonds are formed under intense pressure and heat.",
    "Bananas are berries, but strawberries aren't.",
    "Honey never spoils—it has an eternal shelf life."
];

document.getElementById('new-fact')?.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
});
