import readlineSync from 'readline-sync';

const numFlip = (num) => {
  if (Number.isNaN(num)) {
    return 'error, please write number';
  }
  const number = Math.abs(num).toString();
  let result = '';
  for (let i = number.length - 1; i >= 0; i -= 1) {
    result += number[i];
  }

  return num < 0 ? -Number(result) : Number(result);
};

export default numFlip;

const num = Number(readlineSync.question('Write number: '));
console.log(`flip number: ${numFlip(num)}`);
