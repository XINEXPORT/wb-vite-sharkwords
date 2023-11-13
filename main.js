import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  const word = getRandomWord();

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();

import guess0 from './src/images/guess0.png';
import guess1 from './src/images/guess1.png';
import guess2 from './src/images/guess2.png';
import guess3 from './src/images/guess3.png';
import guess4 from './src/images/guess4.png';
import guess5 from './src/images/guess5.png';

const images = [guess0, guess1, guess2, guess3, guess4, guess5];

// function setSharkImage(element, imageIdx) {
//   if(imageTdx >=0 && imageIDX < images.length){
//     element.innerHTML = `<img src = "{$images[imageIdx]}" alt="guess5" />`;
//   } else {
//     console.error(`Invalid index.`);
//   }
// }
