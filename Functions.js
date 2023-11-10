// Creating a function and calling the function

// function name(){
//     console.log("Vedanth")
// }

// name();

// function test(){
//     var a = "8";
//     var b = "3"

//     c = a;
//     a = b;
//     b = c;
    
    
//     console.log("a is " + a);
//     console.log("b is " + b);
// }

// test()


// Passing parameter into a function 

// function name( number){
//     console.log("My lucky number : " + number );
// }

// name(8);


// return statement 

function calc(num1,num2){
    return num1*num2;
}

var result = calc(3,2);
result;

// Example Programs

// Program -1 

//function robo() {          //creating a function 
//     console.log( " Leave the house " );
//     console.log( " Move out of the house " );
//     console.log( " Move left " );
//     console.log( " Move right " );
//     console.log( " Reached the ground " );
// }

// robo();  // Calling a function 

// Passing the parameter value in the function



// Program - 2 

// function robo(money) {

//     bottles = prompt(" How many bottles do you want : ")
    
//     bottle_cost = 2;
    
//     console.log( " Leave the house " );
//     console.log( " Move out of the house " );
//     console.log( " Move left " );
//     console.log( " Move right " );

//     amount_spent =  bottle_cost * bottles
    
//     console.log(" Amount we spent for bottles : "+ amount_spent + "\n" +" Balance felt : "  + ( money -  amount_spent) );
//     console.log(" Bottles we bought : " + bottles )
    
//     // console.log("Bottles we Bought : " + money / bottle_cost );
    
// }

// robo(60);

// Program -3 

// function life90(age){
//     var yearsremaining =  90 - age; 
//     var monthsremaining = 90*12 - age*12;
//     var weeksremaining = 90*52 -age*52;

//     console.log( " You have " +yearsremaining +" years "+ monthsremaining+" months" + " " +weeksremaining+" weeks");
    
// }

// life90(21);
