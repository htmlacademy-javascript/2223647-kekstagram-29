function isLessOrEqual (string, length) {
  return string.length <= length;
}
isLessOrEqual('abcd',2);


//палиндром

function isPalindrom(rawString) {
  const string = rawString.replaceAll(' ','').toLowerCase();
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i --) {
    reversedString += string[i];
  }
  return reversedString === string;
}
isPalindrom('топот');
