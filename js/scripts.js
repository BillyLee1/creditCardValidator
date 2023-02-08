function creditCardEval(cardNum) {
  let altCard = cardNum.replaceAll(" ", "");
  let cardArray = altCard.split("").reverse();
  let finalCard = [];
  let tempNum;
  let doubleNum = [];

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
        finalCard.push(sum.toString());
      } else {
        finalCard.push(tempNum.toString());
      }
    } else {
      finalCard.push(cardArray[i]);
    }
  }
  finalCard.reverse();
  console.log(finalCard);
}

creditCardEval("4144 6597 1205 9780");
