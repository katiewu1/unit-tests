export const hackerSpeak = (words) => {
  // split up the string into an Array, now each letter/space is their own string
  let splitWords = words.split('');

  splitWords = splitWords.map((letter) => {
    // convert all the letters toLowerCase (the converting process won't change the values in the Array)
    const lowerCaseLetter = letter.toLowerCase();
    if (lowerCaseLetter === 'a') {
      return 4;
    } else if (lowerCaseLetter === 'e') {
      return 3;
    } else if (lowerCaseLetter === 'i') {
      return 1;
    }
    // or you can include the capital letter in the statements
    else if (letter === 'o' || letter === 'O') {
      return 0;
    } else if (letter === 's' || letter === 'S') {
      return 5;
    } else {
      return letter;
    }
  });
  // join the splitWords to put each letter/space into a string again
  return splitWords.join('');
};
