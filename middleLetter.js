const getMiddle = (word) => {
  if (word.length % 2 !== 0) {
    return word.slice(word.length / 2, word.length / 2 + 1);
  }
};

module.exports = getMiddle;
