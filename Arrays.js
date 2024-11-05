let stu_name = ["kamal"," ragahv"," rohit"," Aman"];
/*console.log(stu_name[0]);
console.log(stu_name[1]);
console.log(stu_name[2]);
console.log(stu_name[3]);
console.log(stu_name[4]);*/

/*for(const i of stu_name){
    console.log(i);
}*/

/*for(const key in stu_name){
    const element = stu_name[key];
    console.log(key,element);
}*/

/*console.log(stu_name.length);

stu_name[0] = "sumit";
console.log(stu_name[0]);
console.log(typeof(stu_name)); */

let String = stu_name.toString();
console.log(String);
console.log(stu_name);

console.log(typeof(String));
console.log(typeof(stu_name));

let n = stu_name.join(" --><--");
console.log(n);

stu_name.pop();

console.log(stu_name);

stu_name.pop();
console.log(stu_name);

stu_name.push("kiran");
stu_name.push("Amit");
stu_name.push("kusum");
console.log(stu_name);

stu_name.shift();
console.log(stu_name);

stu_name.unshift("kamal");
console.log(stu_name);

console.log(stu_name.indexOf("kiran"));
delete(stu_name[2]);
console.log(stu_name);
console.log(stu_name.length);
stu_name[2] = "raman";
console.log(stu_name);
console.log(stu_name.length);

let  x = [1,8,38,4,56];
let y = [6,7,8,9,10];
let z = [11,12,13,14,15];
console.log(x.length,y.length,z.length);
x = x.concat(y,z);
console.log(x.length);
console.log(x);
console.log(x.join(" -*- "));

x.sort();
console.log(x);
