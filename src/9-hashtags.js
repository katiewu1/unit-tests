export const hashtags = (text) => {
  // split up the sentence into an Array, split between the spaces
  let splitText = text.split(' ');

  // store the words that have an hashtag in it
  splitText = splitText.filter((word) => word.includes('#'));

  // return the Array with all of the words with #
  return splitText;
};
