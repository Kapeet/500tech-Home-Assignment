import React from 'react';

const Grid = ({ config, data }) => {

  //TODO make this code easier to read
  const fieldsRow = config.map(object => <th key={object.field}>{object.title}</th>);

  const dataRows = data.map(object => {
    const key = Object.values(object)[0]; 
    const fields = config.map(configObject => {
      const TableCellComponent = configObject.component;
      const currentTableCellValue = object[configObject.field];
      return (
        <td key={key+configObject.field}>
          {configObject.component ? <TableCellComponent key={key} data={currentTableCellValue}/> : currentTableCellValue}
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