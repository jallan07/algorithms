// takes in a string, reverses it, and returns the reversed string
const reverseString = (str) => {
  let newStr = str.split('').reverse().join('');
  return newStr;
};
