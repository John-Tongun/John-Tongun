// John Tongun <John>

// Request user input 
const passengerType =prompt("Enter passenger type (adult or child):"
).toLowerCase();
const travelClass = prompt ("Enter travel class (economy or business):"
).toLowerCase();
const luggageweight = parseFloat(prompt("Enter luggage weight in kilograms:")
);

// Global variables
let freeAllowance;
let priceperKg;
let extraWeight;
let fee;

// conditionals
// Data validation
if (passengerType !== "adult" && passengerType !== "child") {
    alert("Invalid passenger type.");
} else if (travelClass !== "economy" && travelClass !== "business") {
    alert("Invalid travel class.");
} else if (isNaN(luggageweight)) {
    alert("Invalid luggage weight.");
} else if (luggageweight <= 0) {
    alert("Luggage weight must be greater than 0.");
} else if (luggageweight > 60) {
    alert("Luggage weight must be less than 60.");
}
// Business rules (logic)
else {
        if (travelClass === "economy") {
            freeAllowance = 20;
            priceperKg = 10;
        } else {
            freeAllowance = 30;
            priceperKg = 8;
        }
    
        //weight calculation
        if (luggageweight <= freeAllowance) {
            fee = 0;
        } else {
            extraWeight = luggageweight - freeAllowance;
            fee = extraWeight * priceperKg;
            //child discount
            if (passengerType === "child") {
                fee = fee * 0.5;
            }
        }
        alert (
            "Extra weight: " + extraWeight + " kg - total fee $" + fee + " USD."
        );
    }


