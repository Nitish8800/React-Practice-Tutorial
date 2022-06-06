// let x = ["1","2","15","-7","300"]
// let y = x.sort()
// console.log(y)



// const f = n => n <=1 ? 1 : n * f(n-1)

// let g = f(4)

// console.log(g)

// function func(a,b){
//     a+=1
//     b.push(1)
// }
// const a=0
// const b=[]

// func(a,b)
// console.log(a,b)

// const promises =[3,2,1].map(d=>(
//     new promises(resolve=>{
//         setTimeout(()=>{
//             resolve(d)
//         },d*1000)
//     })
// ))

// promises.race(promises)



const fs = require("fs").promises

async function filOpener(filepath){
    let file

try{
    file = await fs.open(filepath)
    let data =file.read()
}
finally{
    file.close()
}
}

console.log(fs)

