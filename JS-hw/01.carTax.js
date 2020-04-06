//用傳統語法算出四台汽車含稅5%的總價
var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

//第一題
var array1= new Array();
for(var i=0;i<Cars.length;i++){
    array1[i]=[Cars[i],Prices[i]*1.05];
};
console.log(array1);


//第二題
var sum =0;
for(var i =0;i<Prices.length;i++){
   sum += Prices[i];
};
//return sum;
console.log(sum);




// var result=[];


// var PricesWithTax = prices.map(p=>p*1.05);
// console.log(pricesWithTax);

// for(var i=0;i<Prices.length;i++){
//     console.log(pricesWithTax);
// }

// function CarsinTax(){
//     let Prices = [280, 320, 250, 210];
//     let sum = Prices.Aggregate((total,next)=>total+next);
//     console.log(sum);
// }







