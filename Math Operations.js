// power the value we use Math.power()
// var b = 2;

// Math.pow(b,2);


// // round the value we use Math.floor()
// var a = 3.23;

// Math.floor(a);


// to generate the random number we use Math.random()
// var a = Math.random();
// a;



// Example - love percentage
function love_Calc(name1, name2){

    // name1 = prompt("What's your name : ")
    // name2 = prompt("What's your partner name : ")
    var love_percentage = Math.floor((Math.random())*100);
    love_result = "Love percentage between " +name1+" and " +name2+ " is : "+love_percentage ;
    return love_result;
}


love_Calc("Vedanth", "Chikki");


