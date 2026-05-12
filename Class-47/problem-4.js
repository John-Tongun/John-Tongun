// Author: John Tongun <john.tongun> 

// reguire the user age 
var age = prompt("Please enter your age:");

// conditionals 
if (age < 0) {
    // if the conditionals is true
    // execute the next code block
    alert ("The user age cannot be less than 0");
} else if (age >= 0 && age <= 13) { 
    // && => means and like AND logic operator
    // if the previously conditional is false and 
    // else if conditionals  is true
    // execute the next code block
    alert ("You are a child");
} else if (age > 13 && age <= 17) {
    // if the previously conditional is false and 
    // else if conditionals  is true
    // execute the next code block
    alert ("You are a teenager");
} else if (age >= 18 && age <= 120) {
    // if the previously conditional is false and 
    // else if conditionals  is true
    // execute the next code block
    alert ("You are an adult");
} else {
    alert ("Invalid input. try again.");
}
