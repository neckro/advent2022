const { readFileSync } = require('fs');

const input = readFileSync('./01.input').toString();
const elfInput = input.split('\n\n');
const elves = elfInput.map(elf => elf.split('\n'));
const elfTotals = elves.map(elf => elf.reduce((p, c) => p += +c, 0));
const sortedTotals = elfTotals.slice().sort((a, b) => a - b);

// Answer one
const maxTotal = sortedTotals.pop();
console.log(`Answer one: ${ maxTotal }`);

// Answer two
const topThreeTotals = maxTotal + sortedTotals.pop() + sortedTotals.pop();
console.log(`Answer two: ${ topThreeTotals }`);
