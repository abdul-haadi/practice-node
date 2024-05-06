const prompt = require('prompt-sync')();
function getChangeAmount() {
    const amount = prompt("Enter amount for change (e.g., £1, 50p): ");
    console.log(amount);
    return amount;
  }
  

function calculate() {
    var num = getChangeAmount()
    var count_20 = 0
    var count_10 = 0
    if(num == '5' | '2' | '1'){
        var mul = num*100;
        console.log(mul);

        while(mul >= 20){
            count_20++;
            mul=mul-20;
        }
        while (mul == 10){
            count_10++;
            mul=mul-10;
        }
        console.log("20P: ",count_20, " ", "10P: ", count_10);

    }

    
    
}

calculate()