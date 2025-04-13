async function fetchdata(){
    try{
        var reponse = await fetch("https://dummyjson.com/usetrrs")
        var data = await reponse.json();
        console.log(data);
    }
catch(error){
console.log(" error")
}}
fetchdata()



