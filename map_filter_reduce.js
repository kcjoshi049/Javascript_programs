let arr = [2,4,7,8,6,5];
let arr1 = arr.map((e)=>{
    return e**2;
})

console.log(arr1);

let arr2 = arr1.map((e)=>{
    return e**2;
})

console.log(arr2);

console.log(arr1.filter((e)=>{
    return e>7;
}))

let myname = "kamal";
console.log(typeof(myname));

// let mynewname = myname;
let mynewname = Array.from(myname);
console.log(typeof(mynewname));
console.log(mynewname);


