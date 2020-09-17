const getMiddle = (word) => {
  if (word.length % 2 !== 0) {
    return word.charAt(word.length / 2);
  } else {
    return word.slice(word.length / 2 - 1, word.length / 2 + 1);
  }
};

module.exports = getMiddle;
