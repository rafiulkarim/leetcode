const findComplement = (num) => {
    let data = "";
    while (num > 0) {
      data = (num % 2) + data;
      num = Math.floor(num / 2);
    }
    // console.log(data);
    let decimalToBinary = data.split("").reverse().join("");
    // console.log(decimalToBinary);
    let newData = "";
    for (var j = 0; j < decimalToBinary.length; j++) {
      if (decimalToBinary[j] == "1") {
        newData = newData.concat(0);
      } else {
        newData = newData.concat(1);
      }
    }

    let binaryToDecimal = 0;
    for (var k = 0; k < newData.length; k++) {
      binaryToDecimal =
        binaryToDecimal +
        parseInt(newData[newData.length - (k + 1)]) *
          Math.pow(2, newData.length - (k + 1));
    }
    // console.log(binaryToDecimal);
    return binaryToDecimal;
};

const num = 1;
findComplement(num);
