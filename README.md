# Algorithm: Shuffle An Array
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
