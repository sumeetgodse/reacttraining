import React from 'react';
import ReactDOM from 'react-dom';

const InputText = () => {
  return <input type = "text" placeholder = "Enter Text Here..." />
}

const InputFile = () => {
  return (
    <>
      <br /><br />
      <input type = "file" />
    </>
  );
}

const GetDate = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return <h4>Today's Date : {date < 10 ? `0${date}`:`${date}`} / {month < 10 ? `0${month}`:`${month}`} / {year}</h4>
}

const SelectOptions = () => {
  return (
    <select>
      <option>Option 1</option>  
      <option>Option 2</option>  
      <option>Option 3</option>  
    </select>
  );
}

const RadioOptions = () => {
  return (
    <>
      <br /><br />
      <input type = "radio" id = "option-1" name = "options" />
      <label htmlFor = "option-1">Option 1</label>
      <br />
      <input type = "radio" id = "option-2" name = "options" />
      <label htmlFor = "option-2">Option 2</label>
      <br />
      <input type = "radio" id = "option-3" name = "options" />
      <label htmlFor = "option-3">Option 3</label>
    </>
  );
}

const rangeHandler = () => {
  const range = document.getElementById("range").value;
  document.getElementById("range-label").innerHTML = range;
}

const Range = () => {
  return (
    <>
      <br /><br />
      <input type = "range" id = "range" name = "range" min = "0" max = "10" onChange = {rangeHandler} />
      <label htmlFor = "range" id = "range-label">Points (between 0 and 10)</label>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <InputText />
    <InputFile />
    <GetDate />
    <SelectOptions />
    <RadioOptions />
    <Range />
  </React.StrictMode>,
  document.getElementById('root')
);
