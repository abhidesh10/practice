let removeRecursive = (word, ch) => {
  let index = word.indexOf(ch);
  if (index == -1) {
    return word;
  }
  console.log(word.length());

  return removeRecursive(
    word.substring(0, index) + word.substring(index + 1, word.length()),
    ch
  );
};

console.log(removeRecursive("hello world", "w"));
