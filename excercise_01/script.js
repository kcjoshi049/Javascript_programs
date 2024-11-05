var x = 0;
function createCard(title, cName, views, montOld, duration, thumbnail) {
    let div = document.createElement("div");
    div.className = "number";
    let div1 = document.createElement("div");
    div1.className = "box";
    let div2 = document.createElement("div");
    div2.className = "image";
    let div3 = document.createElement("div");
    div3.className = "time";
    let div4 = document.createElement("div");
    div4.className = "text";
    // <------- for image div ----->
    document.querySelector(".container").append(div1);
    document.querySelectorAll(".box")[x].append(div);
    document.querySelectorAll(".number")[x].insertAdjacentText("afterbegin",`${x+1}`);
    document.querySelectorAll(".box")[x].append(div2);
    document.querySelectorAll(".image")[x].insertAdjacentHTML("afterbegin", `<img src=${thumbnail} alt="img">`);
    document.querySelectorAll(".image")[x].append(div3);
    document.querySelectorAll(".time")[x].insertAdjacentText("afterbegin", `${duration}`);
    // <------ for text div ------>
    document.querySelectorAll(".box")[x].append(div4);
    document.querySelectorAll(".text")[x].insertAdjacentHTML("afterbegin",`<h3>${title}`);
    document.querySelectorAll(".text")[x].insertAdjacentHTML("beforeend",`<ul>
        <li> ${cName} </li>
        <li> ${views} views</li>
        <li> ${montOld} old</li>
        </ul>`);
    x++;
}
createCard("Installing VS Code & How Website Works | Sigma Web Development Course - Tutorial #1 hello world","CodeWithHarry","747k","2 months ","31:20","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEoCKgBEF5IWvKriqkDGwgBFQAAiEIYAdgBAeIBDAgcEAIYBiABOAFAAQ==&rs=AOn4CLCn0Yk8hDzEv-Iy1kfX0PxjT5lVkA");

createCard("Introduction To Java Language | Lacture 1 | Complete Placement Course","Apna College","14m","3 years","18:46","https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEoCKgBEF5IWvKriqkDGwgBFQAAiEIYAdgBAeIBDAgcEAIYBiABOAFAAQ==&rs=AOn4CLCApnn2bNjdrgppNr5WoGmZ59lUdg");

createCard("Netflix Clone Using HTML & CSS|Sigma Web Development Course - Tutorial #53","CodeWithHarry","746k","11 months ","1:57:23","https://i.ytimg.com/vi/ovKVqo-L2EM/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIHBACGAYgATgBQAE=&rs=AOn4CLBVT583KXTM8XNwdW5xCxGXSVOwIA");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Unsplash Nature Life | Part 1","unsplash","2m","3 months ","1:00:00","https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

createCard("Dolly joshi life style | vlog 1","Dolly Joshi Vlog","2m","5 months","1:15:20","image.jpg");

