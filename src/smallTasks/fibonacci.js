import readlineSync from 'readline-sync';

const fib = (num) => {
  if (num < 0) { return 'error, please enter a positive number'; }
  if (Number.isNaN(num)) { return 'error, please enter a number'; }

  if (num === 0 || num === 1) { return num; }
  let first = 0;
  let second = 1;
  let result = 0;
  for (let i = 1; i <= num; i += 1) {
    result = first + second;
    second = first;
    first = result;
  }
  return result;
};

export default fib;

const num = Number(readlineSync.question('Write fibonacci number: '));
console.log(`fibonacci number ${num}: ${fib(num)}`);
