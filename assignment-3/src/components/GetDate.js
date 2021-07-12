import { date, month, year } from '../utilities/utility.js';

const GetDate = () => {
  return <h4>Today's Date : {date < 10 ? `0${date}`:`${date}`} / {month < 10 ? `0${month}`:`${month}`} / {year}</h4>
}

export default GetDate;
