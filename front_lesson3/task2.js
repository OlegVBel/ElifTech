let start = window.confirm("Do you want to play a game?");

if (start){
  let attempts = 3, range = 5, maxPrize = 10, prize = 0, possiblePrize = maxPrize; // default values
  while (true) {
    randomNumber = Math.floor(Math.random() * (range + 1));

    while (attempts > 0) {
      attempts === 3 ? possiblePrize = maxPrize : 
      attempts === 2 ? possiblePrize = maxPrize / 2 : possiblePrize = Math.floor(maxPrize / 3.5);

      answer = window.prompt(
        `Guess a number from 0 to ${range}\nYou have ${attempts} ${attempts > 1 ? "attempts" : "attempt"}\nYour prize is ${prize}$\nPossible prize on current attempt: ${possiblePrize}$\nsadfasf${randomNumber}`);
      if (answer == randomNumber) {
        alert(`You won and have gotten ${possiblePrize}$!`);
        prize += possiblePrize;
        break;
      } else{ 
        answer = window.alert(`${attempts !== 1 ? "Wrong! Try again" : "Wrong :( This is your last attempt"}`);
        attempts--;
      }
    }

    if(attempts === 0){
      alert(`Thank you for the game. Your prize is : ${prize}$`);
      break;
    }
    
    let continueGame = window.confirm("Do you want to continue?");
    if(!continueGame){
      alert(`Thank you for the game. Your prize is : ${prize}$`);
      break;
    }

    attempts = 3;
    range *= 2;
    maxPrize *= 3;
  }
} else{
  console.log('You did not become a millionaire');
}

