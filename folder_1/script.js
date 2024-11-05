let x = document.getElementsByClassName("box");
console.log(x);
let y = Array.from(x);
console.log(y);
y.forEach(element => {
    console.log(element);
});

function fun(){
    let red = Math.ceil(0 + Math.random()*255);
    let green = Math.ceil(0 + Math.random()*255);
    let blue = Math.ceil(0 + Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}
y.forEach(element => {
    element.style.backgroundColor = fun();
    element.textContent = fun();
});
//  random number :- (max-min)+Math.random()
