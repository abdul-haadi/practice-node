var amount = ("21p 20p 20p 10p 30p 40p 50p 70p 30p")
var a = amount.split(" ");
var arr = a
// console.log(a)
var i = 0
var money = 1
var penny = 1
for(am of arr){
    var coin = parseInt(am.slice(0,-1));
    i=i+coin
    // if(a[am] == '20p'){
    // }
    // else if( a[am] == '10p'){
    //     i+=10
    // }
}
if(i >=100){
    money = (i/100)
    penny = i%100
    console.log(`£${Math.floor(money)} ${penny}p`)
    // console.log(penny,"p")
}