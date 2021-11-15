import moment from 'moment';

const wrapperBody = (m, y) => {
  const arrayDay = [[], [], [], [], []];

  const dayOfWeek = 7;
  let week = 0;

  const startOfMonth = new Date(y, m, 1);
  const endOfMonth = new Date(y, m + 1, 0);

  const startMonth = moment(startOfMonth).format('DD');
  const endMonth = moment(endOfMonth).format('DD');

  const reducer = (prev, current) => prev.concat(current);

  for (let day = +startMonth; arrayDay.reduce(reducer).length < +endMonth; day += 1) {
    if (arrayDay[week].length === dayOfWeek) {
      week += 1;
      arrayDay[week].push(day);
    } else {
      arrayDay[week].push(day);
    }
  }
  return arrayDay;
};

export default wrapperBody;
