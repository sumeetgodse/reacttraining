import React from 'react';

const Table = (props) => {
    const items = Object.entries(props.items).slice(0,-1);

    return (
        <div>
        <table>
          <tbody>
            <tr>
              <th>Input</th>
              <th>Value</th>
            </tr>
            {items.map(item => {
              return (
                <tr key = {item[0]}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default Table;
