import { isWin, gerRandom } from './utils.js';

export const calculationAIWin = (gameField, playerIcon, enemyIcon) => {
  const virtualField = Array.from(gameField);
  for (let i = 0; i < virtualField.length; i += 1) {
    for (let j = 0; j < virtualField[0].length; j += 1) {
      if (virtualField[i][j] !== playerIcon && virtualField[i][j] !== enemyIcon) {
        virtualField[i][j] = playerIcon;
        if (isWin(virtualField, playerIcon)) { return [i, j]; }
        virtualField[i][j] = ' ';
      }
    }
  }
  return null;
};

export const AIMove = (gameField) => {
  let calcWin = calculationAIWin(gameField, 'x', 'o');
  if (calcWin !== null) { gameField[calcWin[0]][calcWin[1]] = 'x'; return; }
  calcWin = calculationAIWin(gameField, 'o', 'x');
  if (calcWin !== null) { gameField[calcWin[0]][calcWin[1]] = 'x'; return; }
  do {
    calcWin = [gerRandom(0, 2), gerRandom(0, 2)];
  } while (gameField[calcWin[0]][calcWin[1]] === 'o' || gameField[calcWin[0]][calcWin[1]] === 'x');
  gameField[calcWin[0]][calcWin[1]] = 'x';
};
