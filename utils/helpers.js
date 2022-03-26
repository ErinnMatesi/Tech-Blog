module.exports = {
  cutString: (aString) => {
    const length = 40;
    let trimmedString = aString.substring(0, length);
    return trimmedString;
  }
};
