/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

// your code here

function sumOfEventNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length ; i++ ) {
        if (numbers[i]%2 == 0) {
            sum = sum + numbers[i]
        }
    }
    console.log(`La somme de tous les nombres pairs présents dans le tableau est ${sum}`)
}

sumOfEventNumbers(numbers)


function sumOfEvenNumbers2(numbers) {
    const sum = numbers.reduce((acc, currentValue) => currentValue % 2 === 0 ? acc + currentValue : acc, 0);
    return (console.log(`Alternative : La somme de tous les nombres pairs présents dans le tableau est ${sum}`));
}

sumOfEvenNumbers2(numbers)

/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

function maxNumber(numbers) {
    let max = 0;
    for (let i=0; i<numbers.length;i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    console.log(`Le plus grand nombre présent dans le tableau est ${max}`)
}

maxNumber(numbers2)


// your code here.