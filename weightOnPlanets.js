// Weight on Planets
const planets = { Mercury: 0.38, Venus: 0.91, Earth: 1, Mars: 0.38, Jupiter: 2.34 };

function calculateWeight() {
    const weight = parseFloat(document.getElementById("weight-input").value);
    const output = document.getElementById("planet-output");
    if (isNaN(weight)) {
        output.textContent = "Please enter a valid number.";
    } else {
        output.textContent = Object.entries(planets).map(([p, g]) => `${p}: ${(weight * g).toFixed(1)} kg`).join(", ");
    }
}
