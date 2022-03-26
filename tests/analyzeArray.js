const analyzeArray = (arr) => {
  arr.sort((a,b) => a-b)
  let max = arr[arr.length-1];
  let average = arr.reduce((a,b) => a+b)/arr.length;
  let min = arr[0];
  let length = arr.length;

  return ({average, min, max, length})
}
console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = analyzeArray;