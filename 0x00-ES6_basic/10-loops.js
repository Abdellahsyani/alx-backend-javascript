export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const val of array) {
    newArr.push(appendString + val);
  }

  return newArr;
}
