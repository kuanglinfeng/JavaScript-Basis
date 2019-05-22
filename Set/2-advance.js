// Set 还可以用来取 交集、并集、补集、差集

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

// 问题：请分别对取arr1 arr2的交并差集
let oS1 = new Set(arr1);
let oS2 = new Set(arr2);


// 交集
let temp1 = [...oS1].filter((ele) => {
  return oS2.has(ele);
})

// 差集 (两个集合并集减去两个集合的交集)
let temp2 = [...oS1].filter((ele) => {
  return !oS2.has(ele);
});
let temp3 = [...oS2].filter((ele) => {
  return !oS1.has(ele);
});
let temp4 = [...temp2, ...temp3];

// 并集
let temp5 = Array.from( new Set( [...oS1, ...oS2] ) );


console.log(temp1, temp4, temp5);