// Variables to hold counts
let diamondCount = 0;
let catCount = 0;
let weightCount = 0;

// Cat facts array
const catFacts = [
    "Cats sleep 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have 32 muscles in each ear.",
    "A cat's nose is as unique as a human's fingerprint.",
    "The world's oldest cat lived to be 38 years old."
];

// Random facts array
const randomFacts = [
    "Honey never spoils.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Bananas are berries, but strawberries are not.",
    "Octopuses have three hearts.",
    "The shortest war in history was between Britain and Zanzibar on 27 August 1896."
];

// Function to show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Update diamond count
document.getElementById('diamond-button').addEventListener('click', function() {
    diamondCount++;
    document.getElementById('diamond-count').textContent = diamondCount;
});

// Update cat count
document.getElementById('cat-button').addEventListener('click', function() {
    catCount++;
    document.getElementById('cat-count').textContent = catCount;
});

// Show random cat fact
document.getElementById('cat-facts-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    document.getElementById('cat-fact').textContent = catFacts[randomIndex];
});

// Show random fact
document.getElementById('facts-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    document.getElementById('random-fact').textContent = randomFacts[randomIndex];
});

// Increase weight count
document.getElementById('weight-button').addEventListener('click', function() {
    weightCount++;
    document.getElementById('weight-count').textContent = weightCount;
});

// Show the home page by default
showSection('home');