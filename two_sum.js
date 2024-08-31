const twoSum = (nums, target) => {
  const numIndices = {}; // Object to store the indices of the elements

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices[complement] !== undefined) {
      // console.log([numIndices[complement], i]);
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }
};

// const nums = [2, 7, 11, 15];
// const target = 9;
const nums = [2, 7, 11, 15],
  target = 9;
twoSum(nums, target);
