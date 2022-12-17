# small tasks

Collection of small tasks and challenges.

#
- [Installation](#Installation)
- [fizzBuzz](#fizzBuzz)
- [fibonacci](#fibonacci)
- [numberFlip](#numberFlip)
- [happyNumber](#happyNumber)

## Installation

Tasks included in this directory are not executable files.
So if you want to run them use the command `make <taskName>`.

##  fizzBuzz

Implement and export by default a function that outputs (console.log) to the terminal numbers in the range from begin to end. Wherein:
<ul>
    <li>If the number is divisible by 3 without a remainder, then the word Fizz is displayed instead</li>
     <li>If the number is divisible by 5 without a remainder, then the word Buzz is displayed instead</li>
    <li> If the number is divisible by both 3 and 5 without a remainder, then the word FizzBuzz is displayed instead of the number</li>
    <li> In other cases, the number itself is displayed</li>
</ul>
The function takes two parameters (begin and end) that define the beginning and end of the range (inclusive). For simplicity, we assume that these parameters are integers greater than zero. If the range is empty (when begin > end), then the function simply does not print anything.

##  fibonacci

The function calculates positive Fibonacci numbers. The argument is the serial number of the number.
Formula:
```
f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)
```
##  numberFlip

A function that reverses the digits in the given number and returns the new number.

##  happyNumber

Let's call happy numbers those that, as a result of a series of transformations of the form "sum of squares of digits", will turn into one. For example:
```
7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
Conclusion: the original number 7 is happy.
```
the function returns true if the number is lucky and false otherwise.
The number of process iterations is limited to 10.