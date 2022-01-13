import React from 'react';

const Grid = ({ config, data }) => {

  //TODO make this code easier to read
  const fieldsRow = config.map(object => <th key={object.field}>{object.title}</th>);

  const dataRows = data.map(object => {
    const key = Object.values(object)[0]; 
    const fields = config.map(configObject => {
      const TableCellComponent = configObject.component;
      const currentValue = object[configObject.field];
      const isComponent = Object.values(configObject).length > 2;
      return (
        <td key={key+configObject.field}>
          {isComponent ? <TableCellComponent key={key} data={currentValue}/> : currentValue}
        </td>
      )
    });
    
    
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
        {fieldsRow}
      </tr>
      </thead>
      <tbody>
      {dataRows}
      </tbody>
    </table>
  )
  };
export default Grid;