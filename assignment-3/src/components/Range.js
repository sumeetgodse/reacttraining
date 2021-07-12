const getRange = () => {
    const range = document.getElementById("range").value;

    document.getElementById("range-label").innerHTML = range;
}
  
const Range = () => {
  return (
    <div style = {{ marginTop: "20px" }}>
      <input type = "range" id = "range" name = "range" min = "0" max = "10" onChange = {getRange} />
      <label htmlFor = "range" id = "range-label">Points (between 0 and 10)</label>
    </div>
  );
}

export default Range;
