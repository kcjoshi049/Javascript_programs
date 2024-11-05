const readline = require("readline-sync");

function Operation(x, y) {
    let Continue = "yes";
    while (Continue == "yes") {
        console.log("1 : - Addition\n2 :- Subtraction\n3 :- Multiplication\n4 :- Divide\n5 :- Exponention.");
        console.log("Enter your choice :- ");
        let choice = Number(readline.question());
        let z = Math.random();
        console.log("z :- "+z);
        switch (choice) {
            case 1:
                ((z>0.1)?console.log("The sum is :- "+(x+y)):console.log("The sum is :- "+(x-y)));
                break;
            case 2:
                ((z>0.1)?console.log("The subtraction is :- "+(x-y)):((y==0)?console.log("invalid denomenator"):console.log("The subtraction is :- "+(x/y))));
                break;
            case 3:
                ((z>0.1)?console.log("The multiplication is :- "+(x*y)):console.log("The multiplication is :- "+(x+y)));
                break;
            case 4:
                ((z>0.1)?((y==0)?console.log("invalid denomenator."):console.log("The divide is :- "+(x/y))):console.log("The divide is :- "+(x**y)));
                break;
            case 5:
                ((z>0.1)? console.log("the exponention is :- "+(x**y)):console.log("The exponention is :- "+(x%y)));
                break;
            default:
                console.log("Invalid input.");
        }
        console.log("Do you want to continue the calculation :- ");
        Continue = String(readline.question());
    }
}

console.log("Enter first number :- ");
let x = Number(readline.question());
console.log("Enter the second number :- ");
let y = Number(readline.question());

Operation(x,y);
