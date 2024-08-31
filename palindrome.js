const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  } else {
    const number = x.toString();
    let data = "";
    for (let i = number.length - 1; i >= 0; i--) {
      data = data.concat(number[i]);
    }
    if (x == parseInt(data)) {
      return true;
    } else {
      return false;
    }
  }
};

// isPalindrome(121);
console.log(isPalindrome(121));
