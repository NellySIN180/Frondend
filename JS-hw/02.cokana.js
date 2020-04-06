//國家,確診,死亡,治癒

var Taiwan=[306,5,39];
var China=[82149,3308,75898];
var America=[142895,2436,2660];


//二維陣列
//var Global=[[306,5,39],[82149,3308,75898],[142895,2436,2660]];
var Global=[Taiwan,China,America];  
            // 0     1      2

console.log(Taiwan);
console.log(China);
console.log(America);
console.log(Global);

console.log('台灣'+ Taiwan[0]+','+Taiwan[1]+','+Taiwan[2]);
console.log('美國'+Global[2][0]+','+Global[2][1]+','+Global[2][2]);  //可讀性低,不好維護
               //在全球那個陣列Global取美國,[2]裡面的0,1,2

//把國家抽象化去宣告
var x = ['Taiwan','台灣',306,5,39];
var y = ['China','中國',82149,3308,75898]
var z = ['America','美國',142895,2436,2660]

var Earth = [x,y,z];

let result = document.querySelectorAll("[class^=total]");
//console.log(result);

result[0].innerText = x[2]+y[2]+z[2]; //前面的陣列是HTML 後面的陣列是JAVAscript
result[1].innerText = x[3]+y[3]+z[3];
result[2].innerText = x[4]+y[4]+z[4];
result[3].innerText=x[1];
result[4].innerText=x[2];
result[5].innerText=x[3];
result[6].innerText=x[4];
result[7].innerText=y[1];
result[8].innerText=y[2];
result[9].innerText=y[3];
result[10].innerText=y[4];
result[11].innerText=z[1];
result[12].innerText=z[2];

// var result=document.getElementsByClassName('total1');
// result[0].innerText = x[2]+y[2]+z[2];
// result[1].innerText =x[3]+y[3]+z[3];
// result[2].innerText=x[4]+y[4]+z[4];

// var result2=document.getElementsByClassName('total2');
// result2[0].innerText=x[1];
// result2[1].innerText=x[2];
// result2[2].innerText=x[3];
// result2[3].innerText=x[4];

// var result3=document.getElementsByClassName('total3');
// result3[0].innerText=y[1];
// result3[1].innerText=y[2];
// result3[2].innerText=y[3];
// result3[3].innerText=y[4];

// var result4=document.getElementsByClassName('total4');
// result4[0].innerText=z[1];
// result4[1].innerText=z[2];
// result4[2].innerText=z[3];
// result4[3].innerText=z[4];






