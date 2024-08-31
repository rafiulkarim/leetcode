const longestCommonPrefix = (strs) => {
  let bigLength = strs[0].length;
  let arrIndex = 0;
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].length < bigLength) {
      bigLength = strs[i].length;
      arrIndex = i;
    }
  }

  let data = "";
  let str = strs[arrIndex];
  let counter = 0;
  for (var j = 0; j < bigLength; j++) {
    for (var k = 0; k < strs.length; k++) {
      if (strs[k].indexOf(str) === 0) {
        counter++;
      }
    }    
    if (counter == strs.length) {
      data = str;
      break;
    } else {
      counter = 0;
    }
    str = strs[arrIndex].slice(0, -(j + 1));
  }
  return str
};

const strs = ["flower", "flight", "flow"];
longestCommonPrefix(strs);
