var output = [];
var count = 1;

function fizzbuzz()
{
    
    if (count % 3 == 0)
    {
        if (count % 3 == 0 && count % 5 == 0)
        {
        output.push("FizzBuzz");
        }
            
        else{
        output.push("Fizz");
        }
    }
        
    else if (count % 5 == 0)
    {
        output.push("Buzz");
    }

    else
    {
        output.push(count);
    }

    count++;
    console.log(output);
}

fizzbuzz();


// Program - 2

// var names = ["Vedanth", "Chikku", "Swetha", "Chinnu", "Masthan"];

// function bill_treat(){

//     Random_names = Number(Math.floor(Math.random()*names.length));
    
//     return names[Random_names];
// }

// bill_treat();




