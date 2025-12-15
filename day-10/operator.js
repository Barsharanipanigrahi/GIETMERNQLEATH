//global level
var a=10;

console.log(a)

{
console.log(a)

}

function access(){
    console.log(a)

}


//declaration as block level

{
 var b= 20;
 console.log(b)
}
console.log(b)

//declaration at function level

// function dec(){
    
//     var c=30;
//     console.log(c) 
// }
// dec()
// console.log(c)
//let key word
//declaration
//global level
let num=40;
console.log(num)
{
    console.log(num)
}
//block level
{
    var num1=90;
    console.log(num1);

}

//console.log(num1)
//const key word
const fullname="xyz";
console.log(fullname);

{
    //const
}
//how to declare a variable
//var
var age; //only declaration
console.log(age)

age=20;  //only initialization
console.log(age);

var phone=34567;//both possible
phone=35672;
console.log(phone)

var phone=56738;
console.log(phone)

//let
let email;
console.log(email)
email="email@12"
console.log(email)

// let email;

const name="xyz";
console.log(name)


//name="xty";
//loop
//for loop
for (let i=0;i<=5;i++){
    console.log(i)
}
let idx=1;
while(idx <=5 ){
    console.log(idx);
    idx++
}


let v=1;
do {
    console.log(v);
    v++
}while(v<=5);

//print even no
for(let i=1; i<=10 ; i++){
    if(i%2==0){
        console.log(i);
    }
}
  
// let your_number=40;
// let user_number=prompt("enter your name")
// while(your_number !=user_number){
//     console.log("your value is not match")
//     user_number=prompt("enter another number:");
// }
// if(your_number==user_number){
//     console.log("your value is matched",user_number);
// }


//number
console.log(typeof 1.4)
console.log(typeof "giet");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("$a"));
console.log(typeof BigInt(23456778));

// object
let obj={
    name :"barsha",
    age:22
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["age"])
let arr=[1,2,3];
console.log(arr[2])

//for in object
for(let key in obj){
    console.log(obj [key])
    console.log(key + ":" + obj[key])
}
for(let idx in arr){
    console.log(arr[idx])
}
//for of

for(let v of arr){
    console.log(v)
}
for(let v of obj){
    console.log(v)
}

