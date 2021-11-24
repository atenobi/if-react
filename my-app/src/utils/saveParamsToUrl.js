const saveParamsToUrl = (nameParam, valueParam, addressApi) => {
  let myResultUrl = '';
  const URlUserParams = new URLSearchParams();

  URlUserParams.append(nameParam, valueParam);

  myResultUrl = addressApi + URlUserParams.toString();
  return myResultUrl;
};

export default saveParamsToUrl;
