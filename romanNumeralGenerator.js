
/**
 * Map Object
 * Due to substractive notation (https://en.wikipedia.org/wiki/Subtractive_notation) 
 * we need to include single symbols and conflictive values to simplify the algorithm.
 * Instead to have two arrays and depend of the index, I prefer directly associate each value with each symbol
 */
const mapObject = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};
const generate = (number) => {

    if (!number || !Number.isInteger(number) || number < 0 || number > 3999) {
        return 'Please provide an integer number between 0 and 3999';
    }

    result = '';
    // Loop throught each value. Reverse() because is essential starts with the bigger value
    Object.keys(mapObject).reverse().forEach( decimalKey => {

        while (number % decimalKey < number) {
            result += mapObject[decimalKey]; // Get symbol
            number -= decimalKey; // Substract and try 
        }
    });

    return result;
};

const testGenerate = () => {
    console.log(`Tim Berners Lee was born in 1955 (${generate(1995)})`);
    console.log(`BBC was founded in 1922 (${generate(1922)})`);
    console.log(`Samuel Andreo is going to be working at BBC in 2018 (${generate(2018)})`);
}

testGenerate();