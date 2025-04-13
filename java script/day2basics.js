
// function in loop
function arun (age)
{
    if(age>18){
    console.log(` ${age} eligible to vote`);
}
else{
    console.log(` ${age} print is not`);
}

    
}
arun(16);


// loop for loop
for ( let i=0; i<5; i++)
{
    console.log(i);
}
// loose entity
var a = 10;
var b = "10";
if(a==b) {
    console.log("print it is true")}
else{console.log("it is false")}
// strict entity
var a = 10;
var b = "10";
if(a===b) {
    console.log("print it is true")}
else{console.log("it is false")}

// array
var arr=[10,20,30,40];
console.log(arr[2]);
// find length of array length
console.log(arr.length);
// add data on array
arr[4]="end"
console.log(arr[4]);
// array method @t end
arr.push ("push method")
console.log(arr);
// @begining
arr.unshift("unshift method")
 console.log(arr);
//  modify
arr[2]=80;
console.log(arr);
// delete array @ end
arr.pop();
console.log(arr);
// delete array @ begin

arr.shift();
console.log(arr);
// array reverse
arr.reverse()
console.log(arr);
// array slice take value from last when we want
console.log(arr.slice(3));
console.log(arr.slice(1));


// objects

var obj = {
    name: "arun",
    class: "revamp",
    classmets :["Aran","karan","muran"],
    book: {
        social: "malini",
        tamil : "abdul"
    }

};
// for call objects
console.log(obj.name);
console.log(obj ["classmets"][2]);
// for modify object
console.log(obj.name="aswath");
console.log(obj);
// add data on object
obj.timing=30;
console.log(obj);
// deelete object
delete obj["name"];
console.log(obj);


















