const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
  const div_letter = document.querySelectorAll(`.${letter}`);
  div_letter.forEach(div => {
    div.textContent = letter;
  });

  if (isWordGuessedCorrectly()) {
    const congratsMessage = document.querySelector('#win');
    congratsMessage.style.display = 'block';

    const playAgain = document.querySelector('#win');
    playAgain.style.display = 'block';
    playAgain.addEventListener('click', resetGame)
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
  if (numWrong === 5) {
    const letterBtns = document.querySelectorAll('#letter-buttons');
    letterBtns.forEach(button => {
      button.disabled = true;
    });

    const playAgain = document.querySelector('#play-again');
    playAgain.style.display = 'block';
    playAgain.addEventListener('click', resetGame)
  }

  const sharkImg = document.querySelector('#shark-img img');
  if (numWrong <= 5) {
    sharkImg.src = `/static/images/guess${numWrong}.png`;
  }

};

// Return `true` if the word has been guessed correctly.
const isWordGuessedCorrectly = () => {
  const letterBoxes = document.querySelectorAll('.letter-box');
  return Array.from(letterBoxes).every(div => div.textContent !== '');
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE
    
    button.addEventListener('click',(evt) =>{
      const letter = button.innerHTML;
      console.log('Clicked letter:',letter);
      evt.target.disabled = true;

      if (isLetterInWord(letter)) {
        handleCorrectGuess(letter);
      } else {
        handleWrongGuess();
      }
    });
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
