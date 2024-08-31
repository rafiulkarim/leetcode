const romanToInt = (s) => {
  const obj = [
    {
      key: "IV",
      value: 4,
    },
    {
      key: "IX",
      value: 9,
    },
    {
      key: "XL",
      value: 40,
    },
    {
      key: "XC",
      value: 90,
    },
    {
      key: "CD",
      value: 400,
    },
    {
      key: "CM",
      value: 900,
    },
    {
      key: "I",
      value: 1,
    },
    {
      key: "V",
      value: 5,
    },
    {
      key: "X",
      value: 10,
    },
    {
      key: "L",
      value: 50,
    },
    {
      key: "C",
      value: 100,
    },
    {
      key: "D",
      value: 500,
    },
    {
      key: "M",
      value: 1000,
    },
  ];

  obj.map((item, index) => {
    // console.log(item.key);
    if(s.includes(item.key)){
      console.log('matched', item.key)

      s = s.replace(item.key, '')
    }
  });
};

console.log(romanToInt("LVIII"));
