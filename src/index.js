import getUserMove from './user.js';
import isDone, { printField, isWin } from './utils.js';
import { AIMove } from './ai.js';

export default () => {
  const gameField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  console.log('game-rules');
  printField(gameField);
  const a = true; // rewrite later
  while (a) {
    getUserMove(gameField);
    printField(gameField);
    if (isDone(gameField)) { break; }
    AIMove(gameField);
    console.log();
    printField(gameField);
  }
  if (isWin(gameField, 'o')) { console.log('user win!'); return; }
  if (isWin(gameField, 'x')) { console.log('ai win!'); return; }
  console.log('Tie!');
};
