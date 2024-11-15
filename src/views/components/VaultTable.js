import { React, useState } from 'react';
import { Table, Button, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const VaultTable = ({ columns, data, searchTerm, itemsPerPage=8 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  

    // Filter data based on the search term
    const filteredData = searchTerm
    ? data.filter(row =>
        columns.some(col => {
          const cellValue = row[col.field];
          // Only perform search if cellValue is defined and not null
          return cellValue != null && cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      )
    : data;

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

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
    <Table style={{ borderBottomRightRadius: '50px' }} >
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className={col.align || 'text-left'} style={col.label === 'TYPE' || col.label === 'FILE SIZE'|| col.label === 'VIEW' ? { color: '#1E92B6', fontWeight:300 }: {fontWeight:300}}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {currentData.length > 0 ? (
        currentData.map((row, rowIndex) => (

          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} className={col.align || 'text-left'}>
                {col.field === 'view' ? (
                  <Button color="link" id={`tooltip_${rowIndex}`} title="" type="button">
                    <MdOutlineRemoveRedEye style={{ color: '#1E92B6' }} />
                    <UncontrolledTooltip delay={0} target={`tooltip_${rowIndex}`}>
                      View
                    </UncontrolledTooltip>
                  </Button>
                ) : (
                  <p className="text" style={col.field === 'type' || col.field === 'size' ? { color: '#1E92B6' , fontWeight:300} : { fontWeight:300}}>
                    {row[col.field]}
                  </p>
                )}
              </td>
            ))}
          </tr>
        ))
    
      ):(
        <td colSpan={columns.length} style={{ textAlign: 'center', color: '#1E92B6' }}>
        No data available
      </td>
      )}
        </tbody>
    </Table>

     {/* Pagination Controls */}
     <Pagination style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
     <PaginationItem disabled={currentPage === 1}>
       <PaginationLink previous onClick={() => goToPage(currentPage - 1)}>
         Previous
       </PaginationLink>
     </PaginationItem>
     {pageNumbers.map(page => (
       <PaginationItem key={page} active={page === currentPage}>
         <PaginationLink onClick={() => goToPage(page)}>
           {page}
         </PaginationLink>
       </PaginationItem>
     ))}
     <PaginationItem disabled={currentPage === totalPages}>
       <PaginationLink next onClick={() => goToPage(currentPage + 1)}>
         Next
       </PaginationLink>
     </PaginationItem>
   </Pagination>
 </div>

  );
};

export default VaultTable;