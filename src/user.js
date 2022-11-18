import readlineSync from 'readline-sync';

export default (gameField) => {
  const userMove = readlineSync.question('your move? ');
  const userI = userMove.slice(0, 1);
  const userJ = userMove.slice(1, 2);
  gameField[userI][userJ] = 'o';

  return gameField;
};
