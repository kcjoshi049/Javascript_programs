// let div = document.createElement('div');
// div.className = "org";
// div.innerHTML = "HEY THIS IS OUR BOLD TAG";
// document.querySelector(".box").prepend(div);
// document.querySelector(".box").append(div);
// document.querySelector(".box").before(div);
// document.querySelector(".box").after(div);

/*
    append :- insert at the end inside the selected element.
    prepend :- insert at the begin inside the selected element.
    before :- insert before the selected element.
    after :- insert after the selected element.

*/

// document.querySelector(".box").insertAdjacentElement("beforebegin",div);
// document.querySelector(".box").insertAdjacentElement("beforeend",div);
// document.querySelector(".box").insertAdjacentElement("afterend",div);
// document.querySelector(".box").insertAdjacentElement("afterbegin",div);

/*
    beforebegin :- insert before the selected element.
    beforeend :- insert at the end inside the selected element.
    afterend :- insert after the selected element.
    afterbegin :- insert at the begning inside the selected element.
*/

// document.querySelector(".box").insertAdjacentHTML("beforeend","<h1> hey this is heading </h1>");

// document.querySelector(".box").insertAdjacentText("afterbegin","hey this is our text.");

let p = document.getElementsByTagName("p")[0];
p.remove;