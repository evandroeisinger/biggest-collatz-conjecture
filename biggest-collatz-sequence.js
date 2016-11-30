#!/usr/bin/env node

var memory = {1: 1};

var start_time = new Date().getTime();
var biggest_number_sequence = biggestCollatzSequence(process.argv[2])
var end_time = new Date().getTime();

console.log(biggest_number_sequence);
console.log((new Date().getTime() - start_time) / 1000);

function collatzLength (number) {
    if (number in memory) {
        return memory[number];
    }

    if (number % 2 == 0) {
        return memory[number] = collatzLength(number * 0.5) + 1;
    }

    return memory[number] = collatzLength(number * 3 + 1) + 1;
};

function biggestCollatzSequence (number) {
    var biggest_number_sequence = number;
    var biggest_number_length = 0;

    while (number > 0) {
        var sequence_length = collatzLength(number);

        if (sequence_length > biggest_number_length) {
            biggest_number_sequence = number;
            biggest_number_length = sequence_length;
        }

        number--;
    }

    return biggest_number_sequence;
};
