var products = [
    { name: 'Iphone', price: 200 },
    { name: 'Motorola', price: 70 },
    { name: 'Samsung', price: 150 },
    { name: 'Sony', price: 98 },
    { name: 'Windows pone', price: 10 }
];
const productDisplay = document.querySelector('.product')
let template=''
products.forEach(function(product){
  if(product.price<100){
      template = `<h1>${product.name}</h1>
                <strong>Price: $${product.price}</strong>
                <span>On sale !!</span>`
      productDisplay.insertAdjacentHTML("beforeEnd",template)
  }
})
