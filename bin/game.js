#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameField = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];

const rnd = (minNumber, maxNumber) => {
    const min = Math.ceil(minNumber);
    const max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const isFill = () => {
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            if (gameField[i][j] === ' ') { return false; }
        }
    }
    return true;
};

const isDone = () => {
    if (isWin(gameField, 'x') || isWin(gameField, 'o') || isFill()) { return true; }
    return false;
};

const isWin = (gameField, playerIcon) => {
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

const printField = (gameField) => {
    for (const part of gameField) { console.log(part); }
};

const getUserMove = () => {
    const userMove = readlineSync.question('your move? ');
    const userI = userMove.slice(0,1);
    const userJ = userMove.slice(1,2);
    gameField[userI][userJ] = 'o';
};

const calculationWin = (playerIcon, enemyIcon) => {
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

const AIMove = () => {
    let calcWin = calculationWin('x', 'o');
    if (calcWin !== null) { gameField[calcWin[0]][calcWin[1]] = 'x'; return; }
    calcWin = calculationWin('o', 'x');
    if (calcWin !== null) { gameField[calcWin[0]][calcWin[1]] = 'x'; return; }
    do {
        calcWin = [rnd(0, 2), rnd(0, 2)];
    } while (gameField[calcWin[0]][calcWin[1]] === 'o' || gameField[calcWin[0]][calcWin[1]] === 'x')
    gameField[calcWin[0]][calcWin[1]] = 'x';
};

// main
console.log('game-rules');
printField(gameField);
while (!isDone()) {
    getUserMove();
    printField(gameField);
    AIMove();
    console.log();
    printField(gameField);
} 
console.log('end');