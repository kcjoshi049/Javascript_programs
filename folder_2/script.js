let x = document.getElementById("btn");
// <---------- for single left click ------>
// x.addEventListener("click",()=>{
//     document.querySelector(".container").style.backgroundColor = "lightgreen";
// })

// <------- for double click ----->
// x.addEventListener("dblclick",()=>{
//     alert("This is the box");
// });

// <-------- target an element when any non-primery(other then left click )is clicked.
// x.addEventListener("auxclick",(e)=>{
//     e.stopPropagation();
//     document.querySelector(".container").style.backgroundColor = "yellow";
// });

// <-------- target an when right button is clicked in mouse ------>
// x.addEventListener("contextmenu",()=>{
//     alert("This is context menu button.");
// });

// <------- mousedown ------>
// x.addEventListener("mousedown", () => {
//     alert("This is mousedown");
// });

// <-------- mouseenter -------->
x.addEventListener("mouseenter",()=>{
    x.style.backgroundColor = "red";
    document.querySelector(".container").style.backgroundColor = "lightgreen";
});
