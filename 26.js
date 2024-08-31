const removeDuplicates = (nums) => {
  let myArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!myArr.includes(nums[i])) {
      myArr.push(nums[i]);
    }
  }
  // console.log(myArr);
  return myArr.sort()
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
