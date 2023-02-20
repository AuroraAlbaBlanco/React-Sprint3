
//! si implementas esta función recuerda cambiar la propiedad quantity a 0
for(let i=0; i<cartList.length; i++){
    for(let j=0; j<cartList.length; j++){
        cart.push(cartList[i]);
        if(cartList[i].id == cartList[j].id){
            cartList[i].quantity++
        }
    }
    
    
    //console.log(`push a cart suma ${cart}`)
    console.log(cart)
 }
//y si hago un splice de los ítems iguales?¿
 


//! si implementas esta función recuerda cambiar la propiedad quantity a 1
for (let i=0; i < cartList.length; i++){
    cart.push(cartList[i]);
}
console.log(`cart`)
console.log(cart)

for (let i=0; i< cart.length; i++){
    //buscar elemento repetido
    //hacer un .splice del elemento repetido
    //sumar 1 al elemento que se queda
}




for (let i=0; i<cartList.length; i++){
    cart.push(cartList[i])
    console.log('cart')
    console.log(cart)
    cart[i].quantity++;
    console.log('quantity')

}


//

for(let i=0; i<cartList.length; i++){
    for(let j=0; j<cartList.length; j++){
    if(cartList[i].id != cartList[j].id){
        cart.push(cartList[i]);
    }else{
        if(cartList[i].id === cartList[j].id && cartList[i].quantity === cartList[j].quantity){
            cartList[i].quantity++;
            cart.push(cartList[i]);
        }
    }
     

 }
console.log('cart')
console.log(cart)
}