# Useful Algorithms

## Table of Contents
1. [Count Vowels in a String](#Count-Vowels-in-a-String)
2. [Find Largest Num in Array](#Find-Largest-Number-in-Array)
3. [Shuffle an Array](#Shuffle-an-Array)

## Count Vowels in a String
An algorithm for counting how many vowels appear in a given string

```javascript
// return the the number of vowels in a given string
const vowelCount = (str) => {
  let result = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }
  return result;
};
```

## Find Largest Number In Array
An algorithm for returning the largest number in an array.

```javascript
// returns the largest number in an arry
const maxNum = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum > max) {
      max = currentNum;
    }
  }
  return max;
};
```

## Shuffle an Array
An algorithm that takes in an array, shuffles it, and returns the shuffled array.

```javascript
const shuffleArray = (array) => {
    // shuffle the array
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // reverse the array
    // array = array.reverse();
    return array;
  };
  ```
