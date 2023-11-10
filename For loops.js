

// for (a  = 1; a < 4; a++){
//     console.log("Vedanth");
//     console.log("Chikku");
// }

var game_aaray = [];


function FizzbuZZ_game(){
    
    for (count = 1; count <= 15 ; count++){
        if (count%3 == 0){

            if (count%5 == 0){
                game_aaray.push("FizzBuzz")
            }

            else{
                game_aaray.push("Fizz")
            }
        }

        else{
             game_aaray.push(count);   
        }
        
    console.log(game_aaray);
        
    }
        
}   

FizzbuZZ_game();