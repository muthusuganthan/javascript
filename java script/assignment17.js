let arr = [1,2,3,4,5,6,7,8,9,10];
var mapmethod = arr.map((e)=>{
    return 2*e;
})
console.log(mapmethod);
console.log(...mapmethod);




var filtermethod = arr.filter((e)=>{
    return e % 2 == 0;
});
console.log(filtermethod);



function arr1 (a,b){
    
return a+b;
}
console.log(arr1(10,20));
console.log(arr1(10,90));
console.log(arr1(10,80));
