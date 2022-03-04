//Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let products = document.getElementsByTagName('button');

console.log(products);

function updateCart() {
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;
}

function listProductsInCart() {
    let cartProducts = '';

    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += '<li><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';
    }
    console.log(cartProducts);
    document.getElementById('products').innerHTML = cartProducts;
}

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function(event) {
        console.log('Du klickade på en knapp', event.target);
        let product = event.target.parentNode.getAttribute('data-product');
        console.log(product);
        shoppingCart.push(product);
        console.log(shoppingCart);

        updateCart();
        listProductsInCart();
    });
}

document.getElementById('open-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle('hide');
    listProductsInCart();
});