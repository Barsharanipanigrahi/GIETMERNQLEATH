console.log("hello")
let h1=document.querySelector("#heading")
console.log(h1)

let p1=document.querySelector(".para")
console.log(p1);

let tag=document.querySelector("h3")
console.log(tag)


let ps=document.querySelectorAll(".para")
console.log(ps)

console.log(ps[0])
console.log(ps[0].innerText)
ps[0].innerText="paragraph 11"



console.log(ps[1])
console.log(ps[1].innerHTML)
console.log(ps[1].innerText)
ps[1].innerHTML="<i>this is itallic</i>"

ps[1].style.backgroundColor="yellow";
document.body.style.backgroundColor="gray"


console.log(ps[1].className);
console.log(ps[1].classList);


ps[1].classList.add("para4");
ps[1].classList.add("para4","para5");
ps[1].classList.remove("para");
console.log(ps[1].classList.contains("para4"))
ps[1].classList.toggle("para5")
ps[1].classList.toggle("para6")
let h4=document.createElement("h4");
console.log(h4)
h4.innerText="this is heading 4"
//document.body.appendChild(h4)
document.body.append(h4,h1)

let b=document.createElement("b");
b.innerText="this is b tag"
console.log(b)

let div=document.querySelector(".parent")
div.append(b)
div.prepend(b)
div.before(b)
div.after(b)



let handleBtn=()=>{
    console.log("click")
}
// let button=document.querySelector("#btn1")
// console.log(button);


// let button=document.querySelector("#btn1")
// button.onclick=()=>{
//     console.log("button click");
// }
let btn2=document.querySelector("#btn2")
console.log(btn2)

btn2.addEventListener("click",()=>{
    console.log("click here");
})


let pbody=document.getElementById("paragraph")
console.log(pbody)
pbody.addEventListener("dblclick",()=>{
    console.log("para dbl click");
})

pbody.addEventListener("mousedown",()=>{
    console.log("mouse down");
})
pbody.addEventListener("mouseup",()=>{
    console.log("mouse up");
})
pbody.style.backgroundColor="blue"
pbody.addEventListener("mousemove",()=>{
    console.log("mouse move")
})
pbody.style.backgroundColor="blue"
pbody.addEventListener("mouseenter",()=>{
    console.log("mouse enter")
})
pbody.style.backgroundColor="blue"
pbody.addEventListener("mouseleave",()=>{
    console.log("mouse leave")
})