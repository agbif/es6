// function Product (nameParam, priceParam) {
//   this.name = nameParam;
//   this.price = priceParam;
// }
//
// Product.prototype.nameAndPrice = function () {
//   console.log( "The product's name is: " + this.name );
//   console.log( "The product's price is: " + this.price );
// };

class Product {
  // "constructor" is a special method that's called when you create the object
  constructor (nameParam, priceParam) {
    this.name = nameParam;
    this.price = priceParam;
  }

  nameAndPrice () {
    console.log( "The product's name is: " + this.name );
    console.log( "The product's price is: " + this.price );
  }
}


// ----------------------


var myCurtains = new Product('Sheer Curtains', 40);
var myShorts = new Product('McGregor Shorts', 3000);

console.log( myCurtains );
console.log( myShorts );

myCurtains.nameAndPrice();
myShorts.nameAndPrice();
