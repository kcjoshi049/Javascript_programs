const readline = require("readline-sync");

function createName(o) {
    let n = Math.random();
    if (n < 0.33) {
        return o.first_1;
    }
    else if (n >= 0.33 && n < 0.66) {
        return o.second_2;
    }
    else {
        return o.third_3;
    }
}

let Adjectives = {
    first_1 : "Crazy(1)",
    second_2: "Amazing(2)",
    third_3 : "Fire(3)"
};

let Shop_name = {
    first_1 : " Engine(1)",
    second_2: " Foods(2)",
    third_3 : " Garments(3)"
};
(3)
let Another_word = {
    first_1 : " Bros(1)",
    second_2: " Limited(2)",
    third_3 : " Hub(3)"
};
let arr = [];
let Continue = "yes";
while (Continue != "no") {
    arr.push(createName(Adjectives) + createName(Shop_name) + createName(Another_word));
    console.log("Enter yes if you want to continue searching or enter no to get exit.");
    Continue = String(readline.question());
    
}
console.log(arr);
