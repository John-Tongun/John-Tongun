//Author: John Tongun Wani <John-Tongun-Wani>

//user role
const role = "editor";

let message = "";

switch (role) {
    case "admin":
        message = "full access to te system";
        break;

    case "editor":
        message = "can edit content";
        break;

    case "view":
        message = "can only view content";
        break;

    default:
        message = "unknow role";

}

console.log("validation: ", message);


/*
---------------------------------------
Desktop Test
---------------------------------------

role = "admin"
=> Full access to the system.

role = "editor"
=> Can edit content.

role = "viewer"
=> Can only view content.

role = "guest"
=> Unknown role.

role = ""
=> Unknown role.

---------------------------------------
*/