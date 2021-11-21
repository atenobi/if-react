function bubbleSort(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
      if (arr[j].name > arr[j + 1].name) {
        const swap = arr[j];
        // eslint-disable-next-line no-param-reassign
        arr[j] = arr[j + 1];
        // eslint-disable-next-line no-param-reassign
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

export default bubbleSort;
