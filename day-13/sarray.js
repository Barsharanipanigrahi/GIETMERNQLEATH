console.log("today we learn spacial methods of array")


let arr=[1,2,3,4,5];


arr.forEach((v,i)=> {
    console.log(i+ ":",v,i)
    
})


let updatearr=arr.map((v)=> {
    return v*2;

})
console.log(updatearr);

let updatearr1=arr.map(v=> v*2)
console.log(updatearr1)


let filterarr=arr.filter((v)=>{
    return v%2==0;
})
console.log(filterarr)

let add=arr.reduce((sum,v)=>{
    return sum+v;
})
console.log(add)

let mul=arr.reduce((mul,v)=>{
    return mul*v;
})
console.log(mul)

let numarr=[1,4,6,3,10,9]
console.log(numarr.sort((a,b)=>{return a-b}));
console.log(numarr.sort((a,b)=>{return b-a}));

let some=numarr.some((v)=>{return v%2==0;})
console.log(some)

let every=numarr.every((v)=>{ return v>=0})
console.log(every)
let every1=numarr.every((v)=>{return v<=0})
console.log(every1)

let numarr1=[1,3,5]
console.log(numarr1.find((v)=>{return v>2}))

console.log([[1,2],[3,4],[5,6],[8,7]].flat());
console.log([[1,2,[3,4]],[5,6]].flat(2))
console.log([[1,2],[6,[3,4,[5,6]]],[8,7]].flat(2));


let h1=document.getElementById("heading");
console.log(h1)

let p=document.getElementsByClassName("para");
console.log(p)


let h2=document.getElementsByTagName("h2");
console.log(h2)