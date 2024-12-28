// Random Fact Generator
const randomFacts = [
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a flamboyance."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    document.getElementById("fact").textContent = randomFacts[randomIndex];
}
