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
