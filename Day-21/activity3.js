var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let str = x + "";
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
