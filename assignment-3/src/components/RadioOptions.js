const RadioOptions = () => {
    return (
      <div style = {{ marginTop: "20px" }}>
        <div>
            <input type = "radio" id = "option-1" name = "options" value = "option-1" />
            <label htmlFor = "option-1">Option 1</label>
        </div>
        <div>
            <input type = "radio" id = "option-2" name = "options" value = "option-2" />
            <label htmlFor = "option-2">Option 2</label>
        </div>
        <div>
            <input type = "radio" id = "option-3" name = "options" value = "option-3" />
            <label htmlFor = "option-3">Option 3</label>
        </div>
      </div>
    );
}

export default RadioOptions;
