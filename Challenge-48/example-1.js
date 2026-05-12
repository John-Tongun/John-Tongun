//Author: John Tongun Wani <Github>

//require the user age

var age = prompt("Enter your age: ");

//conditionals
if (age > 0 && age <= 12) {
    //if the conditionals is true
    //execute the next code block
    alert("they receive a Child Discount");

} else if (age > 12 && age < 59) {
    //&& => means and like AND logic operator 
    //else if this conditional is true
    //execute the next code block
    alert(" they pay a Regular Ticket");
} else if (age >= 60 && age <= 120) {
    //if the previously conditional is false, and 
    //else if this conditional is true
    //execute the next code block
    alert("they receive a Senior Discount");
} else {
    alert("Invalid input. try again....");
}


/*
---------------------
Desktop test
---------------------
age < 0      =>  The user age cannot be less than 0 
age =   4       =>  The receive a child Dicount
age =   34      =>  They pay a regular Ticket
age =   78      =>  The Receive a Senuor Discount
age =   "hello" =>  Invalid input. Try again...
---------------------
*/