// 1
function getRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNum);
    }
    return randomArray;
}
const randomArray = getRandomArray(15, 1, 100);
console.log(randomArray);

// 3
function getAverage(...numbers) {
    let sum = 0;
    let count = 0;
    numbers.forEach(function(number) {
        if (!Number.isNaN(number)) {
            sum += number;
            count++;
        }
    });
    if (count === 0) {
        return 0;
    }
    return sum / count;
}
const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(average);

// 4
function getMedian(...numbers) {
    const sortedNumbers = numbers.filter(number => !Number.isNaN(number)).sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
        return sortedNumbers[middleIndex];
    }
}
const median = getMedian(1, 2, 3, 4);
console.log(median);

// 5
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 !== 0);
}
const filteredNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filteredNumbers);

// 6
function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0).length;
}
const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(positiveNumbers);

// 7
function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 === 0);
}
const dividedNumbers = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(dividedNumbers);