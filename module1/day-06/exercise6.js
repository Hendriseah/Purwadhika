//EXERCISE 1
function calculateStudentData(students) {
  if (students.length === 0) return null;

  const scores = students.map(s => s.score);
  const ages = students.map(s => {

    const diff = Date.now() - s.age.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  });

  const max = arr => Math.max(...arr);
  const min = arr => Math.min(...arr);
  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  return {
    score: {
      highest: max(scores),
      lowest: min(scores),
      average: avg(scores)
    },
    age: {
      highest: max(ages),
      lowest: min(ages),
      average: avg(ages)
    }
  };
}

const students = [
  { name: "Hendri", email: "hendri@mail.com", age: new Date(2000, 5, 15), score: 85 },
  { name: "Asep", email: "asep@mail.com", age: new Date(1998, 2, 10), score: 92 },
  { name: "Budi", email: "budi@mail.com", age: new Date(2002, 7, 5), score: 78 }
];

console.log(calculateStudentData(students));

//EXERCISE 2
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addToCart(product, qty) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    return {
      total: this.total,
      items: this.products.map(item => ({
        name: item.product.name,
        price: item.product.price,
        qty: item.qty,
        subtotal: item.product.price * item.qty
      }))
    };
  }
}

const prod1 = new Product("Pen", 3000);
const prod2 = new Product("Marker", 7000);

const transaction = new Transaction();
transaction.addToCart(prod1, 2); 
transaction.addToCart(prod2, 3);

console.log("Current Total:", transaction.showTotal());

console.log("Checkout Data:", transaction.checkout());