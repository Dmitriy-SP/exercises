export const gerRandom = (minNumber, maxNumber) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isFill = (gameField) => {
  for (let i = 0; i < gameField.length; i += 1) {
    for (let j = 0; j < gameField[i].length; j += 1) {
      if (gameField[i][j] === ' ') { return false; }
    }
  }
  return true;
};

export const isWin = (gameField, playerIcon) => {
  const checkText = playerIcon + playerIcon + playerIcon;

  for (let i = 0; i < gameField.length; i += 1) {
    let onJ = '';
    for (let j = 0; j < gameField[0].length; j += 1) {
      onJ += gameField[i][j];
      let onK = '';
      for (let k = 0; k < gameField.length; k += 1) {
        onK += gameField[k][j];
      }
      if (onK === checkText) { return true; }
    }
    if (onJ === checkText) { return true; }
  }

  const diagonalLeftCheck = gameField[0][0] + gameField[1][1] + gameField[2][2];
  const diagonalRigthCheck = gameField[0][2] + gameField[1][1] + gameField[2][0];
  if (diagonalLeftCheck === checkText || diagonalRigthCheck === checkText) { return true; }
  return false;
};

export const printField = (gameField) => {
  for (let i = 0; i < gameField.length; i += 1) { console.log(gameField[i]); }
};

export default (gameField) => {
  if (isWin(gameField, 'x') || isWin(gameField, 'o')) { return true; }
  if (isFill(gameField)) { return true; }
  return false;
};
