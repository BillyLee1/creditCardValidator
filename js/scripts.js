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
        doubleNum.map(function(n) {
          doubleNum = parseInt(n, 10);
        })
        for (let j = 0; j < tempNum.length; j++) {
          sum += tempNum[j];
        }
      } else {
        finalCard.push(tempNum);
      }
    }
  }
  console.log(finalCard);
}

creditCardEval("4144 6597 1205 9780");
