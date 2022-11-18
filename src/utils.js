export const gerRandom = (minNumber, maxNumber) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isFill = (gameField) => {
  const emptyCell = gameField.map((line) => line.filter((cell) => (cell !== 'x' && cell !== 'o'))).flat();
  return !(emptyCell.length > 0);
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
  gameField.map((line) => console.log(line));
};

export default (gameField) => {
  if (isWin(gameField, 'x') || isWin(gameField, 'o') || isFill(gameField)) { return true; }
  return false;
};
