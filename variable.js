console.log("here we are going to solve the first problem in javascript.")
let Student = {
    "name" : "kamal chadra joshi",
    "phone no" : 9756425653,
    "marks" : 396
}
console.log(Student.name);
console.log(Student["phone no"]);
console.log(Student.marks);

let Student_name = "rahul prjapati  ";
let roll_no = 2215220016;
console.log(Student_name+roll_no);

console.log(typeof(Student["phone no"]));
console.log(typeof(Student.marks));

const Employee = {
    E_name : "harsh yadav",
    E_slary : 10000,
    E_id : 420
}
console.log(Employee);

Employee.gender = "Male";
console.log(Employee);

Employee.gender = "Female";
console.log(Employee);

Employee.E_id = 4795;
console.log(Employee);

let Dictionary  = {
    constant : "One that can not be change",
    collegemate : "one who studied with you in the college.",
    eligible : "One who can do desire thing.",
    delete : "To remove something.",
    dictionary : "collection of words and their meanings."
}
console.log(Dictionary.constant);

// we can change the value of object even it is const or not.