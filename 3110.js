const scoreOfString = (s) => {
  let chrArr = [];
  let asciiArr = [];
  for (let i = 97; i < 123; i++) {
    chrArr.push(String.fromCharCode(i));
    asciiArr.push(i);
  }
  console.log(chrArr);
  // console.log(asciiArr);

  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    // console.log(s[i], s[i + 1]);
    const index1 = chrArr.findIndex((char) => char === s[i]);
    const index2 = chrArr.findIndex((char) => char === s[i + 1]);
    sum = sum + Math.abs(asciiArr[index1] - asciiArr[index2]);
    // console.log(asciiArr[index1], asciiArr[index2]);
  }

  return sum
  console.log(sum);
};

const s = "zaz";
scoreOfString(s);
