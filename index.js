// Description
// This time we're going to build a train fare calculator. Simple enough, right? We're not looking for something too fancy, but you should be able to input your age and the distance you're travelling and get your ticket price.

// Instructions

// - Ask the user for their age and how far they are travelling (in km)

// - The price per travelled km will be £0.21
// - Junior passengers (under 18) get a 20% discount
// - Senior passengers (over 65) get a 40% discount

const pricePerKM = 0.21; // £0.21 /KM
const juniorPassengersDiscount = 0.2; // 20% discount
const seniorPassengersDiscount = 0.4; // 40% discount

const userName = prompt("What is you name?");
console.log(yourName);
console.log(`Wellcome, ${userName}!`);

const userAge = prompt ("What is your age?")
console.log(userAge);

const distanceKM = prompt ("Please enter the distance in KM:");

// const departure = 
// prompt(Option: )


const price = (distanceKM * pricePerKM);
console.log(price);

if (userAge < 18) { 
  const disountedPriceJuniors = price - (juniorPassengersDiscount * price)  ;
  console.log("This is the price for the selected trip:" + disountedPriceJuniors);
  // const disountedPriceJuniors = price +
}

else if (userAge > 65) {
  const disountedPriceSeniors = price - (seniorPassengersDiscount * price);
  console.log("This is the pricy for the selected trip:" + disountedPriceSeniors);
}

else {
  console.log("This is the full price for your trip:" + price);
}

