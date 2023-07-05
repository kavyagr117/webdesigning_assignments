let nos = [1, 2, 3, 4, 5];
console.log("Initially nos are:", nos);
nos.shift();
//print nos after shift
console.log("After shift nos are: " , nos);
nos.unshift(5);
console.log("After unshift nos are: " , nos);
let s = [1,2,3,4,5,6,7,8];
s.splice(4,2);
//print nos after splice
console.log("After splice nos are: " , s);
let m = [1,2,3,4,5,6,7,8,];
m.splice(2,0,10,11,12);
//print nos after splice
console.log("After splice addition nos:" , m);
