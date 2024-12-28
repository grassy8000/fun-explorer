// Diamond Clicker Game
let diamonds = 0;
let diamondsPerClick = 1;
let diamondUpgrades = {
    "diamonds-per-click": { price: 50, bought: false },
    "mining-speed": { price: 100, bought: false }
};

function clickDiamond() {
    diamonds += diamondsPerClick;
    document.getElementById("diamonds").textContent = diamonds;
}

function showDiamondUpgrades() {
    const upgradeContainer = document.getElementById("diamond-upgrade-container");
    upgradeContainer.style.display = "block";
}

function buyDiamondUpgrade(upgrade) {
    if (diamonds >= diamondUpgrades[upgrade].price && !diamondUpgrades[upgrade].bought) {
        diamonds -= diamondUpgrades[upgrade].price;
        diamondUpgrades[upgrade].bought = true;

        if (upgrade === "diamonds-per-click") {
            diamondsPerClick += 1;
            document.getElementById("diamonds-per-click").textContent = diamondsPerClick;
        }

        document.getElementById("diamonds").textContent = diamonds;
        updateUpgradeDisplay("diamond-upgrades", diamondUpgrades);
        updateUpgradePrices("diamond");
    }
}

function updateUpgradeDisplay(upgradeId, upgrades) {
    const upgradesPurchased = [];
    for (let upgrade in upgrades) {
        if (upgrades[upgrade].bought) {
            upgradesPurchased.push(upgrade);
        }
    }
    document.getElementById(upgradeId).textContent = upgradesPurchased.join(", ");
}

function updateUpgradePrices(game) {
    for (let upgrade in diamondUpgrades) {
        if (diamondUpgrades[upgrade].bought) {
            diamondUpgrades[upgrade].price += 50; // Increase price after each purchase.
        }
    }
}
