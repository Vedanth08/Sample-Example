weight =  prompt("Enter the weight (in kgs ): ");
height =  prompt("Enter the height (in cm ): ");

height = parseFloat(height);

function BMI(weight,height){
    BMI_calc = weight/(Math.pow(height*0.01,2) );
    return String(BMI_calc).slice(0,5);
    
}

BMI(weight,height);