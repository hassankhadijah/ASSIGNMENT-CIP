//first assignment//
let year = 20;
let minimumyearofvoting = 18;
let eligibiletovote = year >= minimumyearofvoting;
console.log("Are you eligible to vote?"  +eligibiletovote);

if(year >= minimumyearofvoting) {
    console.log("eligible");
} else {
    console.log(noteligible)
}

//second assignment//
let favoriteFruits = ["lemon", "grapes", "kiwi", "pineapple",];
 for(let i = 0; i < favoriteFruits.length; i++){
    console.log(favoriteFruits[i]);
 }




 
 //saturdayAssignment for code in practice (07-10-2023)
 for (let i = 1; i <= 100; i++) {
    if (i * 3 === 0) {
        console.log("Fizz");
    } else if (i * 5 === 0) {
        console.log("Buzz");
    } else if (i * 3 === 0 && i * 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}




