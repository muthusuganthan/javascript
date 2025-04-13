// console.log(fetch("https://dummyjson.com/products"));
fetch("https://dummyjson.com/users").then((Response)=>{
    // console.log(Response.json());   return promise
     return Response.json()
}).then((data)=>{
    console.log(data.users[0].address.address);
    // only data to get all the data
}).catch((e)=>{
    console.log("error")
})

// above is old method for j.son data


// new method;
async function fetchdata(){
    var Response = await fetch("https://dummyjson.com/users")
    var data = await Response.json();
    console.log(data);
}
fetchdata()

// errors in js
async function fetchdata(){
try{
    var Response = await fetch("https://dummyjson.com/users")
    var data = await Response.json();
    console.log(data);
}catch(error){
    console.log("data error")
}


