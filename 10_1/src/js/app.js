// TODO: write your code here

import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
    console.log(error);
  }

);


console.log('worked');