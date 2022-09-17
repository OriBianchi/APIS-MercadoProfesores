/* eslint-disable prettier/prettier */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'id', label: 'Nro', minWidth: 50 },
  { id: 'fechaControl', label: 'Fecha', minWidth: 100 },  
  
{
    id: 'peso',
    label: 'Peso',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'altura',
    label: 'Altura',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'anchoCabeza',
    label: 'Cabeza',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'medicamento',
    label: 'Medicamento',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'dosis',
    label: 'Dosis',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'periodoAplicacion',
    label: 'Aplicacion',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'estudio',
    label: 'Estudio',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'resultado',
    label: 'Resultado',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'observaciones',
    label: 'Observaciones',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, fechaControl, altura, peso, anchoCabeza, medicamento, dosis, periodoAplicacion, estudio,resultado,observaciones) {
  return { id, fechaControl, altura, peso, anchoCabeza, medicamento, dosis, periodoAplicacion,estudio, resultado, observaciones};
}

const rows = [
  createData('1', '20/Sept/2000', "75 cm", "10kg","10cm","Tafirol","1 capsula","20/Sept/2000 - 25/Sept/2000","Hemograma Completo","Normal","Fiebre alta"),
  createData('2', '21/Sept/2000', "75 cm", "12kg","11cm","-","-","-","-","-","Chequeo diario"),
  createData('3', '22/Sept/2000', "76 cm", "11kg","11cm","Omega 3","2 capsulas","22/Sept/2000 - 30/Sept/2000","Perfil Lipídico","Anormal","Colesterol alto"),
  createData('4', '23/Sept/2000', "76 cm", "13kg","12cm","-","-","-","-","-","Chequeo diario"),
  createData('5', '24/Sept/2000', "76 cm", "12kg","12cm","-","-","-","-","-","Chequeo diario"),
];

export default function ColumnGroupingTable() {
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
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
              Datos de Control
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Medidas
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Prescripción
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Estudios
              </TableCell>
              <TableCell align="center" colSpan={1}>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.fechaControl}>
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
