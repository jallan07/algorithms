# Useful Algorithms

## Table of Contents
1. [Largest Num in Array](#Largest-Num-in-Array)
2. [Shuffled Array](#Shuffled-Array)


## Largest Num In Array
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

## Shuffled Array
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
