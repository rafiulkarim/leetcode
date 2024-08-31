// const countSeniors = (details) => {
//   let counter = 0;
//   let slicedArr = [];
//   for (let i = 0; i < details.length; i++) {
//     if (details[i].includes("F")) {
//       let sptStr = details[i].split("F");
//       slicedArr[slicedArr.length] = sptStr[1];
//       let age = sptStr[1][0] + sptStr[1][1];
//       console.log(age);
//       if (parseInt(age) > 60) {
//         counter++;
//       }
//     } else {
//       let sptStr = details[i].split("M");
//       slicedArr[slicedArr.length] = sptStr[1];
//       let age = sptStr[1][0] + sptStr[1][1];
//       console.log(age);
//       if (parseInt(age) > 60) {
//         counter++;
//       }
//     }
//   }

//   console.log(slicedArr);
//   console.log(counter);
//   return counter;
// };

// let details = ["1313579440F2036", "2921522980M5644"];
// countSeniors(details);

const countSeniors = (details) => {
  let counter = 0;
  for (let i = 0; i < details.length; i++) {
    if (details[i].includes("F") || details[i].includes("M")) {
      if (details[i].includes("F")) {
        // console.log("Female");
        let sptStr = details[i].split("F");
        if (parseInt(sptStr[1].slice(0, 2)) > 60) {
          counter++;
        }
      } else {
        // console.log("male");
        let sptStr = details[i].split("M");
        if (parseInt(sptStr[1].slice(0, 2)) > 60) {
          counter++;
        }
      }
    } else {
      let reverseStr = details[i].split("").reverse().join("");
      let sptStr = reverseStr[3] + reverseStr[2];
      if (parseInt(sptStr) > 60) {
        counter++;
      }
      console.log(sptStr);
    }
  }
  console.log(counter);
  // console.log(counter)
  return counter;
};

let details = [
  "5612624052M0130",
  "5378802576M6424",
  "5447619845F0171",
  "2941701174O9078",
];
countSeniors(details);
