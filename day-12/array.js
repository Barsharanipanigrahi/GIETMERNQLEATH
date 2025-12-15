console.log("today we learn array")
let arr =[1, 2, 3, 4, 5];
//console.log(arr[3]);

//let arrobj=new Array[1,2,3];
//console.log(arrobj);

console.log(Array(3))
console.log(Array.of(1,2,3,4))

console.log(Array.from("abcde"))

let num1=[1,2,3];
num1.push(4,5,6);
console.log(num1)
num1.pop(3,4)
console.log(num1)

num1.unshift(0)
console.log(num1)
num1.shift();
console.log(num1)


console.log("value",num1.at[2]);
//console.log("index",num1.indexof())
console.log(num1.includes(1));


console.log(num1.reverse());
console.log(num1.join(","));
console.log(num1.slice(2,5))

console.log(num1)
num1.splice=(1,2,"hii");
console.log(num1)

                           //QUESTIONS
//find max element 1,2,10,15,79,80
// count even odd 
// sum of all array element
//find the difference bet max and min
//merge 2 array into a single array
//conpany=["IBM","microsoft","google","qlith"] remove microsoft add amajon ane flipkart
//remove duplication from array 1,2,2,3,4,5,6,6
//double each element in the same array
//find product of elements in array
//store different type of string in a array and find the word with length>4
//check array is containing all positive number or not


let  arr12=[1,2,10,15,79,80];
let maxelement=arr[0];
for(let n of arr12)
{
    if(max<n)
        max=0
}
console.log(max);







company=["IBM","microsoft","google","qlith"];
console.log(company)
company.splice(1,2,"amajon","flipkart")
console.log(company)


console.log(num2)
num2.push(3,4,5)
console.log(num2)



