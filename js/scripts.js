function creditCardEval(cardNum) {
  let altCard = cardNum.replaceAll(" ", "");
  let cardArray = altCard.split("").reverse();
  let finalCard = [];
  let tempNum;
  let doubleNum = [];
  let sumOfNums = 0;
  let final;

  for (let i = 0; i < cardArray.length; i++) {
    if (i % 2 === 0) {
      tempNum = parseInt(cardArray[i]) * 2;
      if (tempNum > 9) {
        let sum = 0;
        tempNum = tempNum.toString();
        doubleNum = tempNum.split("");
        
        let tempDouble = doubleNum.map(function(n) {
          return parseInt(n);
        })
        for (let j = 0; j < tempDouble.length; j++) {
          sum += tempDouble[j];
        }
        sumOfNums += sum;
        finalCard.push(sum.toString());
      } else {
        finalCard.push(tempNum.toString());
        sumOfNums += tempNum;
      }
    } else {
      finalCard.push(cardArray[i]);
      sumOfNums += parseInt(cardArray[i]);
    }
  }
  
  finalCard.reverse();
  final = finalCard.toString().replaceAll(",", "");
  console.log(final);
  console.log(sumOfNums);

  isValid(final);
}

function isValid(ccNum) {
  if (ccNum.length === 16) {
    console.log("yup");
  }
}



creditCardEval("4102 0808 8043 5620");
