import readlineSync from 'readline-sync';

const sumOfSquareDigits = (num) => {
  const numString = String(num);
  let sum = 0;
  for (let i = 0; i < numString.length; i += 1) {
    const digit = Number(numString[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = (num) => {
  if (Number.isNaN(num)) {
    return 'error, please write number';
  }
  if (num <= 0) {
    return false;
  }

  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};

export default isHappyNumber;

const num = Number(readlineSync.question('Write number: '));
console.log(`Is this number are happy number: ${isHappyNumber(num)}`);
