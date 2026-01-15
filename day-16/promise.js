console.log("today we learn promise.js")

// let promise=new Promise((resolve,reject)=>{

// })
// console.log(promise)

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello")
//         resolve()
//     },3000)
// })
// console.log(promise)
// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello")
//         reject()
//     },3000)
// })
// console.log(promise)

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello")
//         resolve("sucess")
//     },3000)
// })
// console.log(promise)
// promise.then((e)=>{
//     console.log(e)
// })

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello")
//         reject("sucess")
//     },3000)
// })
// promise.then((e)=>{
//         console.log(e)
//     })
// console.log(promise)
// promise.catch((e)=>{
//     console.log(e)
// })

// let getdata=async()=>{
//     let res=fetch("")
//     console.log(res);

// }


// let getdata=async()=>{
//     let res=await fetch ("API")
//     console.log(getdata);

// }


// let getdata=async()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data=await res.json()
//     console.log(data)

// }
// getdata()

// let getdata=async()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data=await res.json()
//     data.forEach((obj) => {
//         console.log(res)
//     });

// }
// getdata()


// let getData = async()=>{
//     let res= await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data= await res.json()    
   
    
// let ul=document.createElement("ul")
// ul.style.cssText="max-width:1024px;margin:auto;display:flex;flex-wrap:wrap;gap:5px;list-style:none"
// data.forEach((obj)=>{
//     let li=document.createElement("li")
//     li.innerText=obj.title
//     li.style.cssText="width:200px;height:200px;box-shadow:2px 2px 5px black; display:flex;justify-content:center;align-items:center"
//     ul.append(li)
// })

// document.body.append(ul)

// }

// getData()



let createreq=async()=>{
    let req=await fetch("https://jsonplaceholder.typicode.com/posts",{)
    method:"post",
    body :JSON.stringify({
    name="xyz",
    age=30
})
Headers:{
    "content-type":"application/json"
}

      
let data=await res.joson()
console.log(data)
console.log("create data")
}
createreq()




// let updatedata=async()=>{
//     let res= await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"put",
//     body:JSON.stringify({
//         title:"this is update"
//     }),
//     headers:{
//         "content-type":"application/json"
//     }

// });

//     let data=await res.json();
//     console.log(data)
//     console.log("update data")
// }
// updatedata()



let deletedata=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"delete"
    })
let data=await res.json();
console.log(data)
console.log("delete data")
    
   
}
deletedata()