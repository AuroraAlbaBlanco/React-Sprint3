// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        quantity: 0,
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        quantity: 0,


    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        quantity: 0,

        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        quantity: 0,

    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        quantity: 0,

    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        quantity: 0,

    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        quantity: 0,

    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        quantity: 0,

    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        quantity: 0,
    

    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
        }
    }
    //console.log(`cartList origin`)
    //console.log(cartList)

    return cartList;
}

// Exercise 2
function cleanCart() {
    for (let i = 0; i < cartList.length; i++) {
        cartList.splice([i], cartList.length);
    }
    //console.log(cartList);
    return cartList;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalCartList = 0;
    for (let i = 0; i < cartList.length; i++) {
        totalCartList += cartList[i].price;
    }
    //console.log(totalCartList);
    return totalCartList;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let total = 0;
    let aux = [];

    for (let i = 0; i < cartList.length; i++) {
        aux.forEach(function (item) {
            if (item.id == cartList[i].id) {
                total = item.quantity - 1;
            }
        })
        cartList[i].quantity++;
        aux.push(cartList[i]);
    }
    //console.log('auxiliar cart');
    //console.log(aux); 

    cart = aux.filter((item, index) => {
        return aux.indexOf(item) === index;
    })
    console.log('final cart')
    console.log(cart);
    return cart;

}


// Exercise 5
function applyPromotionsCart(item) {
// Apply promotions to each item in the array "cart"
let subtotalWithDiscount = 0;
let oilDiscount = 10;
let cupcakeDiscount = 2 * 5 / 3;

    if(item.id == 1 && item.quantity >= 3){
        subtotalWithDiscount = oilDiscount * item.quantity;
    }else if (item.id == 3 && item.quantity >= 10){
        subtotalWithDiscount = (cupcakeDiscount * item.quantity).toFixed(2);
    }else{
        subtotalWithDiscount = item.quantity * item.price;
    }

    console.log('final price');
    console.log(subtotalWithDiscount)

 return subtotalWithDiscount;

}

// Exercise 6

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let outModal =  document.getElementById('cart_list');
    let outCart = generateCart();
    //let outCart = cart;
    //let outDiscount = 0;
    let strHTML  ='';

    
    
    for(let i=0; i< outCart.length; i++){
        //outDiscount = applyPromotionsCart(outCart[i]);
        strHTML += '<tr>'
        strHTML += '<th scope="row">' + outCart[i].name + '</th>';
        strHTML +=  '<td scope="col" class="text-center">' + '$'+ outCart[i].price + '</td>';
        strHTML +=  '<td scope="col" class="text-center">' + outCart[i].quantity + '</td>';
        strHTML +=  '<td scope="col" class="text-center">' +'$'+ applyPromotionsCart(outCart[i]) + '</td>';
        strHTML += '</tr>';
        console.log(strHTML);
    }
    
    outModal.innerHTML = strHTML;
    //console.log(outModal);

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}