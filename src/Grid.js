import React from 'react';

const Grid = ({ config, data }) => {
  let fieldRow = config.map(object => <th key={object.field}>{object.title}</th>);

  // let dataRow = data.map(data => )
  let dataTR = data.map(object => {
    let key = Object.values(object)[0]; 
    let fields = config.map(configObject => <td key={key+configObject.field}>{object[configObject.field]}</td>);
    return (
    <tr key={key}>
      {fields}
    </tr>
    )
  })
  return (
  <table>
    <thead>
    <tr>
      {fieldRow}
    </tr>
    </thead>
    <tbody>
    {dataTR}
    </tbody>
  </table>
)
  };
export default Grid;