module.exports = function toReadable(number) {
    const container = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const containerTwoDigit = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const calculateTwoDigit = (number) => {
        const rest = number % 10;
        const decade = Math.floor(number / 10);

        if (rest === 0) {
            return `${containerTwoDigit[decade]}`;
        }

        return `${containerTwoDigit[decade]} ${container[rest]}`;
    };

    if (number <= 19) {
        return container[number];
    }

    if (number < 20) {
        const rest = number % 10;
        const restStr = String(rest);

        return `${container[restStr]}teen`;
    }

    if (number <= 99) {
        return calculateTwoDigit(number);
    }

    if (number <= 999) {
        const rest = number % 100;
        let restStr = null;
        if (rest === 0) {
            restStr = ``;
        } else if (rest < 20) {
            restStr = `${container[rest]}`;
        } else {
            restStr = calculateTwoDigit(rest);
        }

        const hundred = Math.floor(number / 100);

        if (!restStr) {
            return `${container[hundred]} hundred`;
        }
        return `${container[hundred]} hundred ${restStr}`;
    }
};
