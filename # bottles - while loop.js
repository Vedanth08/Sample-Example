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
