weight =  prompt("Enter the weight ( in kgs ): ");
height =  prompt("Enter the height ( in cm ): ");

height = parseFloat(height);

function BMI(weight,height){
    BMI_calc = weight/(Math.pow(height*0.01,2) );

    BMI_result =  String(BMI_calc).slice(0,5);

    if ( BMI_result <= "18.5" ){
        console.log("Your BMI : "+BMI_result+" You have less weight");
    }
    
    if ( BMI_result >= "18.5" && BMI_result <= "24.9" ){
        console.log("Your BMI : "+BMI_result+" You have normal weight");
    }

    else {
    console.log("Your BMI : "+BMI_result+" You have more weight");
    }
    
}

BMI(weight,height);