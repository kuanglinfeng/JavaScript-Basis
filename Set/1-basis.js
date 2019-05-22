let oS1 = new Set([1, 2, 3, 3, 4]);
let oS2 = new Set("123456789342798")

oS1.add(5);
oS2.delete("1");
// oS1.clear();

// a -> ele b -> ele c -> self
oS2.forEach((a, b, c) => {
  console.log(a, b, c);
});

// for of 遍历具有迭代接口的对象的属性值
for (let val of oS1) {
  console.log('-_-' + val);
}

console.log(oS1, oS2);

// 天生具体去重功能 （包括令人头疼的对象也可以）
let obj = {name: 'obj'};
let arr = [6, 6, 7, 8, 9, {name: 'Flinn'}, {name: 'Leon'}, obj, obj];
let set = new Set(arr);

console.log([...set]);
console.log(Array.from(set));
