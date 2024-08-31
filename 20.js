const isValid = (s) => {
  const firstParenthesesOne = [];
  const firstParenthesesTwo = [];
  const secondParenthesesOne = [];
  const secondParenthesesTwo = [];
  const thirdParenthesesOne = [];
  const thirdParenthesesTwo = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      firstParenthesesOne.push(s[i]);
    } else if (s[i] == ")") {
      firstParenthesesTwo.push(s[i]);
    } else if (s[i] == "{") {
      secondParenthesesOne.push(s[i]);
    } else if (s[i] == "}") {
      secondParenthesesTwo.push(s[i]);
    } else if (s[i] == "[") {
      thirdParenthesesOne.push(s[i]);
    } else {
      thirdParenthesesTwo.push(s[i]);
    }
  }
  console.log(
    firstParenthesesOne,
    firstParenthesesTwo,
    secondParenthesesOne,
    secondParenthesesTwo,
    thirdParenthesesOne,
    thirdParenthesesTwo
  );

  if (
    firstParenthesesOne.length == firstParenthesesTwo.length &&
    secondParenthesesOne.length == secondParenthesesTwo.length &&
    thirdParenthesesOne.length == thirdParenthesesTwo.length
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

const s = "()[]{}";
isValid(s);
