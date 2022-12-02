const { readFileSync } = require('fs');

const input = readFileSync('./02.input').toString();

const rounds = input.split('\n').map(r => r.split(' '));

const moveTable = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3,
};

const winningMoves = {
    1: 2,
    2: 3,
    3: 1,
};

const losingMoves = {
    1: 3,
    2: 1,
    3: 2,
};

function scoreRound1(r) {
    const p1 = moveTable[r[0]];
    const p2 = moveTable[r[1]];
    let resultScore = 0;
    if (p1 == p2) {
        resultScore = 3;
    } else if (winningMoves[p1] == p2) {
        resultScore = 6;
    }
    return resultScore + p2;
}

function scoreRound2(r) {
    const p1 = moveTable[r[0]];
    const strat = moveTable[r[1]];
    let p2 = 0;
    let resultScore = 0;
    switch (strat) {
        case 1: // lose
            p2 = losingMoves[p1];
            resultScore = 0;
            break;
        case 2: // draw
            p2 = p1;
            resultScore = 3;
            break;
        case 3: // win
            p2 = winningMoves[p1];
            resultScore = 6;
            break;
    }
    return resultScore + p2;
}

const scoreTotal1 = rounds.reduce((t, r) => t += scoreRound1(r), 0);
console.log(`Answer one: ${ scoreTotal1 }`);
const scoreTotal2 = rounds.reduce((t, r) => t += scoreRound2(r), 0);
console.log(`Answer two: ${ scoreTotal2 }`);
