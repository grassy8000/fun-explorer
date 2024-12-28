// Cat Clicker Game
let money = 0;
let moneyPerClick = 1;
let upgrades = {
    "money-per-click": { price: 50, bought: false },
    "cat-click-speed": { price: 100, bought: false }
};

function clickCat() {
    money += moneyPerClick;
    document.getElementById("money").textContent = money;
}

function showCatUpgrades() {
    const upgradeContainer = document.getElementById("cat-upgrade-container");
    upgradeContainer.style.display = "block";
}

function buyCatUpgrade(upgrade) {
    if (money >= upgrades[upgrade].price && !upgrades[upgrade].bought) {
        money -= upgrades[upgrade].price;
        upgrades[upgrade].bought = true;

        if (upgrade === "money-per-click") {
            moneyPerClick += 1;
            document.getElementById("money-per-click").textContent = moneyPerClick;
        }

        document.getElementById("money").textContent = money;
        updateUpgradeDisplay("cat-upgrades", upgrades);
        updateUpgradePrices("cat");
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
    for (let upgrade in upgrades) {
        if (upgrades[upgrade].bought) {
            upgrades[upgrade].price += 50; // Increase price after each purchase.
        }
    }
}
