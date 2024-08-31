const mergeTwoLists = (list1, list2) => {
  // console.log(list1, list2);
  for (i in list2) {
    // console.log(list2[i]);
    list1.push(list2[i]);
  }
  // console.log("list1", list1);
  // console.log(list1.sort())
  return list1.sort()
};
let list1 = [],
  list2 = [];
mergeTwoLists(list1, list2);
