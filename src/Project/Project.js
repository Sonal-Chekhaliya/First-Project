import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'SN', label: ' SI. No', minWidth: 30 },
  { id: 'ProjectTittle', label: ' Project Tittle', minWidth: 70 },
  { id: 'Description', label: 'Project Description', minWidth: 70 },
  {  id: 'StartDate', label: 'Project Start date',  minWidth: 70,  align: 'right', format: (value) => value.toLocaleString('en-US'), },
  { id: 'EndDate',label: 'Project end Date',minWidth: 70, align: 'right', format: (value) => value.toLocaleString('en-US'), },
  { id: 'Budget',  label: 'Density',  minWidth: 70,  align: 'right', format: (value) => value.toFixed(2), },
  { id: 'Priority', label: ' Priority', minWidth: 70 },
  { id: 'ProjectStatus', label: ' Project Status', minWidth: 70 },
  { id: 'Action', label: ' Action', minWidth: 70 },
];

function createData(SN, ProjectTittle, Description, StartDate, EndDate, Budget, Priority, ProjectStatus, Action) {
  //const density = population / size;
  return { SN, ProjectTittle, Description, StartDate, EndDate, Budget, Priority, ProjectStatus, Action };
}

const rows = [
  createData(1,'Ecommerce', 'Ecommerce description on', '01/03/2023', '01/09/2025',10000,'low','Completed','View,edit,deete'),
  createData(1,'Ecommerce', 'Ecommerce description on', '01/03/2023', '01/09/2025',10000,'low','Completed','View,edit,deete'),
  createData(1,'Ecommerce', 'Ecommerce description on', '01/03/2023', '01/09/2025',10000,'low','Completed','View,edit,deete'),
  createData(1,'Ecommerce', 'Ecommerce description on', '01/03/2023', '01/09/2025',10000,'low','Completed','View,edit,deete'),
  createData(1,'Ecommerce', 'Ecommerce description on', '01/03/2023', '01/09/2025',10000,'low','Completed','View,edit,deete'),
  createData(1,'Ecommerce', 'Ecommerce description on', '01/03/2023', '01/09/2025',10000,'low','Completed','View,edit,deete'),

];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
} 