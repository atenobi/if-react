const searchHotelFunc = (str, arr) => {
  const result = [];

  const txEqual = (text) => (text.toLowerCase().trim());

  arr.forEach((elem) => {
    if (txEqual(elem.country).includes(txEqual(str))
	    || txEqual(elem.name).includes(txEqual(str))
	    || txEqual(elem.city).includes(txEqual(str))) {
      result.push(elem);
    }
  });
  return result;
};

export default searchHotelFunc;
