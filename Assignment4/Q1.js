class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price = this.price - discountAmount;
        return this.price;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

const p1 = new Product(1, "Laptop", 55000, "Electronics");
const p2 = new Product(2, "Shoes", 1200, "Fashion");
const p3 = new Product(3, "Mouse", 450, "Electronics");
const p4 = new Product(4, "Chair", 2200, "Furniture");


const products = [p1, p2, p3, p4];

p1.applyDiscount(10); // 10%
p2.applyDiscount(5);

const costlyProducts = products.filter(product => product.price > 1000);

console.log("Products with price > 1000:");
costlyProducts.forEach(product => {
    console.log(product.getDetails());
});
