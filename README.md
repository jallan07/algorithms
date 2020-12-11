# Useful Algorithms

## Table of Contents
1. [Count Vowels in a String](#Count-Vowels-in-a-String)
2. [Factorial](#Factorial)
3. [Find Largest Num in Array](#Find-Largest-Number-in-Array)
4. [Reverse a String](#Reverse-a-String)
4. [Shuffle an Array](#Shuffle-an-Array)
5. [Title Case](#Title-Case)

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

## Factorial
An algorithm that returns the factorial of a number
```javascript
// returns the factorial of `num`
const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result = result * i;
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

## Reverse a String
An algorithm for reversing strings

```javascript
// takes in a string, reverses it, and returns the reversed string
const reverseString = (str) => {
  let newStr = str.split('').reverse().join('');
  return newStr;
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
  
  ## Title Case
  An algorithm that takes in a string and converts it to title case
  
  ```javascript
  // takes in a string and returns a new string with the first letters of each word capitalized
const titleCase = (str) => {
  const result = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    word[0] = word[0].toUpperCase();
    result.push(word.join(""));
  }
  return result.join(" ");
};

  ```
