// var a = ["Vedanth","Chikku","Chinnu","Swetha","Shushumna"];

// var b = prompt("Enter the name : ");
// console.log(a);

// a.includes(b);


// Array Push

// var a = [];
// a.push(1);
// a.push(2,4);
// a.push(3);

// console.log(a);


// Array Pop

// var b = [1,2,3,4];

// b.pop(3);
// console.log(b);



    
Problem - 1

function party_entry(){
    var guestlist = ["Vedanth","Chikku","Chinnu","Swetha","Shushumna"];
    var guest_entry = prompt("Enter your name for entry : ");

    var verify = guestlist.includes(guest_entry);

    if (verify == true){
        alert(guest_entry+" Your are allow for the party as your name is in the guest list ");
    }
    else{
        alert(guest_entry+" Sorry your not allow for the party as your name is not in the guest list ");
    }
    
}

party_entry();

