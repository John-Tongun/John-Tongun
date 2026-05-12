//Author: John Tongun wani <John-Tongun-Wani>

//storage the rating variable

const rating = "PG";

//declaring global variable
let output = "";


switch (rating) {
    case "G":
        output = "General Audiences.";
        break;

    case "PG":
        output = "Parental guidance suggested.";
        break;

    case "PG-13":
        output = "Parents strongly cautioned.";
        break;

    case "R":
        output = "Restricted.";
        break;

    case "NC-17":
        output = "Adults only.";
        break;

    default:
        output = "invalid input....";

}

console.log("Output: ", output);


/*
---------------------------------------
Desktop Test
---------------------------------------

rating = "G"
output = "General Audiences"

rating = "PG"
output = "Parental guidance suggested."

rating = "PG-13"
output = "Parents strongly cautioned"

rating = "R"
output = "Restricted."

rating = "NC-17"
output = "Adults only"


*/