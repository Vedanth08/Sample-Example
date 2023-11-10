// String Concatenation 

// var ex = "Hello";
// var world = "World";
// ex + " "+ world;


// String length

// var name = "Vedanth";
// name.length;


// String Slicing 

// var message = "myself Vedanth";
// message.slice(0,6);


// String Casing

// Upper Case
// var name = "vedanth";
// name.toUpperCase();

// Lower Case
// var name = name.toUpperCase();
// name.toLowerCase();



// Example Programs  


// Program 1 

// var message = prompt("What message you want to share ? ");
// var name = prompt("To whom you want to share the message ? ");

// alert("Message To : " +name + "\n" +"Message Sent : " + message);


// Program 2 

// var message = prompt("what message you want to share ? ")
// var message_length = message.length;
// var total_msg_length = 180;

// alert( "Characters you have writtern : " + message_length + "\n" + "Characters remaining : " + ( total_msg_length - message_length ) );


// program 3 

// var message = prompt("what message you want to share ? ")
// var message_length = message.length;
// var total_msg_length = 10;
// var message_alert = message.slice( 0, total_msg_length );

// alert( "Your Message : " + message_alert );
// alert( "Characters you have writtern : " + message_length + "\n" + "Characters remaining : " + ( total_msg_length - message_length ) );


// Program 4 

// var name = prompt("What is your name : ")
// var greet = prompt ("What you want to greet : ")

// alert( name.slice(0,1).toUpperCase() + name.slice(1,name.length) + "\n" + greet.slice(0,1).toUpperCase() + greet.slice(1,greet.length) ) ;
