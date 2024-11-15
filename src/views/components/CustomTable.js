import React from 'react';
import { Table, Button, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const CustomTable = ({ columns, data , searchTerm, borderColor="rgba(255,255,255,.2)"}) => {

  const filteredData = searchTerm
  ? data.filter(row =>
      columns.some(col => {
        const cellValue = row[col.field];
        // Only perform search if cellValue is defined and not null
        return cellValue != null && cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
      })
    )
  : data;
  return (
    <Table style={{ borderBottomRightRadius: '50px' }} className="table-text">
      <thead>
        <tr
        style={{
          borderBottom: `2px solid ${borderColor || 'white'}`,}}>
          {columns.map((col, index) => (
            <th key={index} className={col.align || 'text-left'} style={{ color: 'white', fontWeight:500 , fontSize:12 }}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, rowIndex) => (
          <tr key={rowIndex}
          style={{
            borderBottom: `2px solid ${borderColor || 'white'}`,}}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} className={col.align || 'text-left'}>
                {col.field === 'view' ? (
                  <Button color="link" id={`tooltip_${rowIndex}`} title="" type="button">
                  
                    <MdOutlineRemoveRedEye style={{ color: '#ccc' }}/>
                    <UncontrolledTooltip delay={0} target={`tooltip_${rowIndex}`}>
                      View
                    </UncontrolledTooltip>
                  </Button>
                ) : (
                  <p style={{ color: 'white' }}>{row[col.field]}</p>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;