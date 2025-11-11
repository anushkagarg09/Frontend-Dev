let orderamount = 400;     
let ispremium = false;     
let isremote = true;     

let deliveryFee = 0;
let deliverydays = 3;

if (!ispremium) {
  if (orderamount < 500) {
    deliveryFee = 50;
  }
}

if (isremote) {
  deliverydays += 2;
}

let totalCost = orderamount + deliveryFee;
console.log(totalCost);
console.log(deliveryDays);
