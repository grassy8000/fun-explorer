// Example of Random Facts
const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible.",
    "Bananas are berries, but strawberries are not.",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance'.",
    "There are more stars in the universe than grains of sand on all of Earth's beaches.",
    "Sharks have been around longer than trees.",
    "Wombat poop is cube-shaped."
];

// Function to display a random fact
function showRandomFact() {
    const factElement = document.getElementById("randomFact");
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
}

// Example: Alert on page load
window.onload = function() {
    console.log('Welcome to Fun Explorer!');
    alert('Welcome to Fun Explorer! Enjoy the games!');
};
