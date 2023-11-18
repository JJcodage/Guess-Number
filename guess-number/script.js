'use strict';
// check part
/*console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.number`).textContent = secretNumber;
document.querySelector(`.guess`).value;
*/
document.querySelector(`.again`).addEventListener(`click`, numberGame);

let highScore = 0;

function numberGame() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.score`).textContent = '20';
  document.querySelector(`.guess`).value = '';

  let score = 20;

  document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);
    const newHighScore = document.querySelector(`.highscore`).textContent;
    //when there is no input
    if (!guess) {
      document.querySelector(`.message`).textContent = `⛔No number!`;
    }
    //when player win the game
    else if (guess === secretNumber) {
      document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

      document.querySelector(`body`).style.backgroundColor = `#60b347`;

      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.score`).textContent = score;

      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
      if (newHighScore > highScore) {
        document.querySelector(`.highscore`).textContent = newHighScore;
      } else if (newHighScore === highScore) {
        document.querySelector(`.highscore`).textContent = highScore;
      } else if (newHighScore < highScore) {
        document.querySelector(`.highscore`).textContent = highScore;
      }
    }
    //when guess is too high
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(`.message`).textContent = `📈 Too High!`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else {
        document.querySelector(
          `.message`
        ).textContent = `💥 You lost the game!`;
        document.querySelector(`.score`).textContent = 0;
      }
    }
    //when guess is too low
    else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(`.message`).textContent = `📉 Too low!`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else {
        document.querySelector(
          `.message`
        ).textContent = `💥 You lost the game!`;
        document.querySelector(`.score`).textContent = 0;
      }
    }
  });
}

numberGame();
