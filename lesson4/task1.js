// Напиши фукцнию findLongestWord(string)
// которая принимает произвольную строку
// состоящую только из слов разделённых пробелом
// (параметр string) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (let word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo impedit aspernatur sequi ipsam voluptates odit quis nemo ut cumque similique veritatis ullam obcaecati eaque soluta, reiciendis tempore cum neque.';
// console.log(findLongestWord(text));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google';
console.log(findLongestWord('May the force be with you')); // 'force'
