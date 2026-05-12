let grade = parseFloat(prompt("Enter student final grade (0-100):"));
let attendance = parseFloat(prompt("Enter attendance percentage (0-100):"));
let project = prompt("Was the final project submitted? (yes/no)").toLowerCase();

let result;
let performance;

// Validation
if (grade < 0 || grade > 100 || isNaN(grade)) {
    alert("Invalid grade!");
}
else if (attendance < 0 || attendance > 100 || isNaN(attendance)) {
    alert("Invalid attendance!");
}
else if (project !== "yes" && project !== "no") {
    alert("Project must be yes or no.");
}
else {

    // Attendance rule
    if (attendance < 75) {
        result = "FAIL";
    }
    else {

        if (grade >= 90) {
            result = "PASS";
            performance = "Excellent";
        }
        else if (grade >= 70) {

            if (project === "yes") {
                result = "PASS";
                performance = "Good";
            } else {
                result = "REMEDIAL EXAM";
            }

        }
        else if (grade >= 50) {
            result = "REMEDIAL EXAM";
        }
        else {
            result = "FAIL";
        }
    }

    alert("Student grade:" + grade + "Attendance:" + attendance + "%" + "Final project submitted:" + project
        + "Result:" + result);

}