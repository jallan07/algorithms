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
