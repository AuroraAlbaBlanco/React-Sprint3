let oilDiscount = 10;
    let subtotalOilDiscount = 0;
    let cupcakeDiscount = 2 * 5 / 3;
    let subtotalCakeDiscount = 0;
    let subtotalWithDiscount;



    for (let i = 0; i < cart.length; i++) {
        if (cart.id = 1) {
            if (cart[i].quantity >= 3) {
                cart[i].price = oilDiscount;
                subtotalOilDiscount = oilDiscount * cart[i].quantity;
            }
        }
        if (cart.id = 3) {
            if (cart[i].quantity >= 10) {
                cart[i].price = cupcakeDiscount;
                subtotalCakeDiscount = (cupcakeDiscount * cart[i].quantity).toFixed(2);
            }
        }

    }
    subtotalWithDiscount = subtotalOilDiscount || subtotalCakeDiscount;
    console.log('subtotal');
    console.log(subtotalWithDiscount);
    return subtotalWithDiscount;

//

let total = cart;
//let subtotalWithDiscount = 0;
//let oilDiscount = 10;
//let cupcakeDiscount = 2 * 5 / 3;

for(let i=0; i<total.length; i++){
    if(total[i].id == 1 && total[i].quantity >= 3){
        subtotalWithDiscount = oilDiscount * total[i].quantity;
    }else if (total[i].id == 3 && total[i].quantity >= 10){
        subtotalWithDiscount = (cupcakeDiscount * total[i].quantity).toFixed(2);
    }else{
        subtotalWithDiscount = total[i].quantity * total[i].price;
    }

    console.log('final price');
    console.log(subtotalWithDiscount)
}
 return subtotalWithDiscount;

