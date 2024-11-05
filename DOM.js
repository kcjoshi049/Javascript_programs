// let x = document.getElementsByClassName("box");
// x[2].style.backgroundColor = "lightgray";

let x = document.getElementsByClassName("box");
for (const element of x) {
    element.style.backgroundColor = "blue";
}
document.getElementById("b3").style.backgroundColor="lightgray";

document.querySelector(".container").style.borderColor="yellow";

for(const x of document.querySelectorAll(".box")){
    x.style.borderColor = "red";
}

document.getElementsByTagName("div")[0].style.borderRadius="100%";

let temp = document.getElementsByClassName("box")[3] === (document.getElementById("b3"));
console.log(temp);

