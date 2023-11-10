// var fibonacci = [0,1,3,4,5];

// function fibonacci_genertor(n){
//     a = fibonacci.slice(0,n+1);
//     console.log(a);
// }

// fibonacci_genertor(1);


function fibonacci_genertor(n){

    var output = [];

    if (n === 1){
        output = [0];
        return output;
        
    }

    else if( n === 2){
        output = [0,1];
        return output;
    }

    else if( n > 1 ) {

        output = [0,1];

        for( var i = 2; i <= n; i++){
    
            a = output.push( output[output.length-2] + output[output.length-1] );

            if (i === n ){

                output.push("Vedanth");
            }

        }

        return output;
    }

}

fibonacci_genertor(10);


