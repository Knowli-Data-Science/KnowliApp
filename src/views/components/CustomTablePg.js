import { React, useState } from 'react';
import { Table, Button, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineRemoveRedEye, MdClose } from "react-icons/md";
import { registerables } from 'chart.js';

const CustomTablePg = ({ columns, data, setData, searchTerm, edit = false, itemsPerPage = 4,  borderColor="rgba(255,255,255,.2)"}) => {
  const [tableData, setTableData] = useState(data); // Main dataset
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on the search term
  const filteredData = searchTerm
    ? tableData.filter(row =>
        columns.some(col => {
          const cellValue = row[col.field];
          return cellValue != null && cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      )
    : tableData;

  // Calculate total pages based on the filtered data length
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate the starting and ending index of the data to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Handle page change
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to handle removing a row
  const handleRemoveRow = (rowIndex) => {
    // Remove row from the main data (tableData) by recalculating the filtered row index
    const globalIndex = startIndex + rowIndex;
    const updatedData = tableData.filter((_, index) => index !== globalIndex);
    setTableData(updatedData);

    // Adjust the current page if the last item on the page is deleted and it goes below the current page range
    if (currentPage > Math.ceil(updatedData.length / itemsPerPage)) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div>
      <Table style={{ borderBottomRightRadius: '50px' }} className="table-text">
        <thead>
          <tr
          style={{
            borderBottom: `2px solid ${borderColor || 'white'}`,
            
             // Dynamically set the bottom border color
          }}>
            {columns.map((col, index) => (
              <th key={index} className={col.align || 'text-left'} style={{ color: 'white', fontWeight: 500, fontSize: 12 }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {currentData.length > 0 ? (
          currentData.map((row, rowIndex) => (
            <tr 
            key={rowIndex}
            style={{
                borderBottom: `2px solid ${borderColor || 'white'}`,
                
                 // Dynamically set the bottom border color
              }} >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={col.align || 'text-left'}>
                  {col.field === 'view' ? (
                    <Button color="link" id={`tooltip_${rowIndex}`} title="" type="button">

                      <MdOutlineRemoveRedEye style={{ color: '#ccc' }} />
                      <UncontrolledTooltip delay={0} target={`tooltip_${rowIndex}`}>
                        View
                      </UncontrolledTooltip>
                    </Button>
                  ) : (
                    <p style={{ color: 'white' }}>{row[col.field]}</p>
                  )}
                </td>
              ))}
              {edit && (<td style={{ textAlign: 'right' }}>
                {/* "X" icon to remove row */}
                <Button color="link" onClick={() => handleRemoveRow(rowIndex)}>
                  <MdClose style={{ color: 'red', fontSize: '1.2em', opacity:.8 }} />
                </Button>
              </td>)}
            </tr>
          )) 
        ):(
            <td colSpan={columns.length} style={{ textAlign: 'center', color: '#1E92B6' }}>
            No data available
          </td>
          )}
        </tbody>
      </Table>

      <Pagination style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' , fontSize:13}}>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink style={{color:"white",opacity:.8}} previous onClick={() => goToPage(currentPage - 1)}>
            Previous
          </PaginationLink>
        </PaginationItem>
        {pageNumbers.map((page) => (
          <PaginationItem key={page} active={page === currentPage}  >
            <PaginationLink onClick={() => goToPage(page)}  style={{color:"white",opacity:.8}}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink next onClick={() => goToPage(currentPage + 1)}  style={{color:"white", opacity: .8}}>
            Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div >

  );
};

export default CustomTablePg;