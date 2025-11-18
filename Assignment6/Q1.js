function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");

        setTimeout(() => {
            if (Math.random() < 0.2) {  // 20% chance of failure
                reject("❌ Failed to boil water.");
            } else {
                resolve("✔ Water boiled.");
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("❌ Failed to brew coffee.");
            } else {
                resolve("✔ Coffee brewed.");
            }
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into the cup...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("❌ Failed to pour coffee.");
            } else {
                resolve("✔ Coffee poured.");
            }
        }, 1000);
    });
}

boilWater()
    .then((msg) => {
        console.log(msg);
        return brewCoffee();
    })
    .then((msg) => {
        console.log(msg);
        return pourCoffee();
    })
    .then((msg) => {
        console.log(msg);
        console.log("🎉 Coffee ready for the team!");
    })
    .catch((error) => {
        console.log(error);
        console.log("😞 Coffee process failed. Try again!");
    });
