/*
1. ÅÄÖ fungerar ej

2. Sök funktionen fungerar ej.

3. Om det inte finns en vara och man letar efter sammanlagda priset så kraschar det

5. Lägger man till en bokstav istället för pris så blir det NaN
isStringAValidePrice 

6. Om man trycker på visa medelkonstande som inte är implementerad så rensar den varorna. 

7. Avsluta är en 50 chans

*/

//const utf8 = require('utf8');
var hej = "hej";
const readlineSync = (typeof module === "object") ? require("readline-sync") : {
  question: ((message) => prompt(message))
};


function main() {
  let products = [
    { name: "Banan", price: 10 },
    { name: "Mango", price: 45 },
    { name: "Lök", price: 15 }
  ];

  console.log("Hej och välkommen till din inköpslista!");
  let loopMenu = true;
  do {
    console.log("1. Se nuvarande varor");
    console.log("2. Lägg till vara och pris");
    console.log("3. Ta bort vara (inte implementerad!)");
    console.log("4. Sök vara");
    console.log("5. Visa dyraste/billigaste vara (inte implementerad!)");
    console.log("6. Visa totalkostnad");
    console.log("7. Visa medelkostnaden per vara (inte implementerad!)");
    console.log("8. Töm listan");
    console.log("9. Avsluta");
    let choice = readlineSync.question("Mata in ditt val: ");

    switch (choice) {
      case "1":
        showProducts(products);
        break;
      case "2":
        updateProducts = menuAddProduct(products);
        products = [...updateProducts];
        break;
      case "3":
        updateProducts = menuRemoveProduct(products); // ej implementerad
        break;
      case "4":
        menuSearchProduct(products);
        break;
      case "5":
        menuExpensiveCheapProduct(products); // ej implementerad
        break;
      case "6":
        const totalCost = totalProductCost(products);
        console.log(totalCost);
        break;
      case "7":
        //    const averagePrice = averageProductPrice(products); // ej implementerad
        break;
      case "8":
        products = emptyList();
        console.log("Inköpslistan är nu tom!");
        break;
      case "9":
        loopMenu = false;
        break;
      default:
        console.log("Fel inmatning!");
    }
  } while (loopMenu);
  console.log("Hej då!");

}
function showProducts(products) {
  console.log("----------------------");
  for (const [index, product] of products.entries()) {
    console.log(`${index + 1}: ${product.name}, ${product.price}`);
  }
  console.log("----------------------");
}

function menuAddProduct(products) {
  const name = readlineSync.question("Mata in namnet på produkten: ");
  let priceAsString = readlineSync.question("Mata in priset på produkten: ");
  while (!isStringAValidPrice(priceAsString)) {
    priceAsString = readlineSync.question("Felaktig form på priset!\nMata in pris igen: ");
  }
  const price = Number(priceAsString);
  const product = { name, price };
  const updateProducts = addProduct(products, product);

  return updateProducts;
}

function addProduct(products, product) {
  const updateProducts = [...products];
  updateProducts.push(product);
  return updateProducts;
}

function isStringAValidPrice(price) {
  return true;
}

function menuRemoveProduct(products) {
  console.log("Funktionen är inte implementerad ännu :(");
  return [];
}

function menuSearchProduct(products) {
  const name = readlineSync.question("Mata in namnet på produkten: ");
  const filteredProducts = searchProduct(products, name);
  if (filteredProducts.length === 0)
    console.log(`Hittade inga matchningar på '${name}'`);
  else showProducts(filteredProducts);
}

function searchProduct(products, name) {
  const filteredProducts = products.filter(product => product.name === name);
  return filteredProducts;
}

function menuExpensiveCheapProduct(products) {
  console.log("Funktionen är inte implementerad ännu :(");
}

function totalProductCost(products) {
  let totalCost = 0;
  let index;
  let product;
  for (index = 0; index < products.length; index++) {
    product = products[index];
    totalCost += product.price;
  }

  return totalCost;


}



function averageProductPrice(product) {
  console.log("Funktionen är inte implementerad ännu :(");
  return console.log("men ärru dum eller? den är inte implementerad ännu!");

}

function emptyList() {
  return [];
}

/*
if (typeof module === "object") {
  module.exports = functions;
}
*/




const functions = {
  main,
  addProduct,
  totalProductCost,
  emptyList
}

if (typeof module === "object") {
  module.exports = functions;
}