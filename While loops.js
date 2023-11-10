// var a = 3;

// while (a < 5)
// {
//     console.log("Vedanth");
//     a++;
//     console.log(a);
// }


// Example Program

// var output = [];
// var count = 1;

// function fizzbuzz()
// {

//     while(count <= 15 ){
        
//         if (count % 3 == 0)
//         {
//             if (count % 3 == 0 && count % 5 == 0)
//             {
//             output.push("FizzBuzz");
//             }
                
//             else{
//             output.push("Fizz");
//             }
//         }
        
//         else if (count % 5 == 0)
//         {
//             output.push("Buzz");
//         }
    
//         else
//         {
//             output.push(count);
//         }
//         count++;
//         console.log(count);
        
//     }
    
    
//     console.log(output);
// }

// fizzbuzz();



// Program 2 

var bottles = 10;

function song(){
    
    while (bottles > 0) {
        console.log(bottles+" bottles of beer on the wall, "+bottles+" bottles of beer"
                    +"\n"+"Take one down and pass it arround,"+(bottles-1)+" bottles of beer on wall");
        bottles--;
    }
    
    console.log("No bottles of beer on the wall, No more bottles of beer"
                +"\n"+"Go to the store and buy some more bottles");
    
}

song();
