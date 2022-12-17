import readlineSync from 'readline-sync';

const fizzBuzz = (begin, end) => {
  if (Number.isNaN(begin) || Number.isNaN(end)) {
    console.log('error, please enter a number');
    return;
  }
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0 ? 'Fizz' : '';
    const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
    console.log(`${hasFizz}${hasBuzz}` || i);
  }
};

export default fizzBuzz;

const begin = Number(readlineSync.question('Write begin number: '));
const end = Number(readlineSync.question('Write end number: '));
console.log('fizzBuzz:');
fizzBuzz(begin, end);
