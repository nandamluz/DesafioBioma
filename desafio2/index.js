const array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

function unzip(array) {
  const newArray = array.flat();

  newArray.sort();

  return newArray;
}

const result = unzip(array);
console.log(result);
