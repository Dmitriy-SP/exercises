import readlineSync from 'readline-sync';

const correctAnswer = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];

export default (gameField) => {
  let userAnswer;
  let userMove;
  do {
    userAnswer = readlineSync.question('your move? ');
    userMove = correctAnswer.filter((cell) => cell === userAnswer);
  } while (userMove.length === 0)
  const userI = userAnswer.slice(0, 1) - 1;
  const userJ = userAnswer.slice(1, 2) - 1;
  gameField[userI][userJ] = 'o';
  return gameField;
};
