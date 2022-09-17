/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function createData(nombre, cantdosis, dosisdadas, dosis) {
    return {
        nombre,
        cantdosis,
        dosisdadas,
        dosispendientes: cantdosis - dosisdadas,
        dosis,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.nombre}</TableCell>
                <TableCell align="right">{row.cantdosis}</TableCell>
                <TableCell align="right">{row.dosisdadas}</TableCell>
                <TableCell align="right">{row.dosispendientes}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">Dosis</Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nro. Dosis</TableCell>
                                        <TableCell>Edad Prevista</TableCell>
                                        <TableCell align="right">¿Administrada?</TableCell>
                                        <TableCell align="right">Fecha de Administración</TableCell>
                                        <TableCell align="right">Lugar de Administración</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.dosis.map((dosisRow) => (
                                        <TableRow key={dosisRow.nroDosis}>
                                            <TableCell component="th" scope="row">{dosisRow.nroDosis}</TableCell>
                                            <TableCell>{dosisRow.edadPrevista}</TableCell>
                                            <TableCell align="right">{dosisRow.administrada}</TableCell>
                                            <TableCell align="right">{dosisRow.fechaAdmin}</TableCell>
                                            <TableCell align="right">{dosisRow.lugar}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        cantdosis: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        dosisdadas: PropTypes.number.isRequired,
        dosis
            : PropTypes.arrayOf(
                PropTypes.shape({
                    amount: PropTypes.number.isRequired,
                    customerId: PropTypes.string.isRequired,
                    date: PropTypes.string.isRequired,
                }),
            ).isRequired,
        nombre: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('BCG', 1, 1, [
        {
            nroDosis: 1,
            edadPrevista: "Recién Nacido",
            administrada: "Sí",
            fechaAdmin: "20-9-2000",
            lugar: "Hospital Italiano"
        }]),
    createData('Hepatitis B', 2, 1, [
        {
            nroDosis: 1,
            edadPrevista: "Recién Nacido",
            administrada: "Sí",
            fechaAdmin: "20-9-2000",
            lugar: "Hospital Italiano"
        },
        {
            nroDosis: 2,
            edadPrevista: "11 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Pentavalente A', 3, 0, [
        {
            nroDosis: 1,
            edadPrevista: "2 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "4 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 3,
            edadPrevista: "6 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Rotavirus', 2, 0, [
        {
            nroDosis: 1,
            edadPrevista: "2 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "4 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Pentavalente B', 1, 0, [
        {
            nroDosis: 1,
            edadPrevista: "15-18 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Salk (Poliomelitis)', 4, 0, [
        {
            nroDosis: 1,
            edadPrevista: "2 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "4 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 3,
            edadPrevista: "6 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 4,
            edadPrevista: "5-6 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Neumococo Conjugada', 3, 0, [
        {
            nroDosis: 1,
            edadPrevista: "2 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "4 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 3,
            edadPrevista: "12 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Gripe', 5, 0, [
        {
            nroDosis: 1,
            edadPrevista: "6 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "12 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 3,
            edadPrevista: "15 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 4,
            edadPrevista: "15-18 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 5,
            edadPrevista: "24 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Meningococo', 4, 0, [
        {
            nroDosis: 1,
            edadPrevista: "3 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "5 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 3,
            edadPrevista: "15 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 4,
            edadPrevista: "11 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Triple Viral', 2, 0, [
        {
            nroDosis: 1,
            edadPrevista: "12 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 2,
            edadPrevista: "5-6 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        },
        {
            nroDosis: 3,
            edadPrevista: "11 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Hepatitis A', 1, 0, [
        {
            nroDosis: 1,
            edadPrevista: "12 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Varicela', 1, 0, [
        {
            nroDosis: 1,
            edadPrevista: "15 Meses",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Triple Bacteriana Celular', 1, 0, [
        {
            nroDosis: 1,
            edadPrevista: "5-6 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('Triple Bacteriana Acelular', 1, 0, [
        {
            nroDosis: 1,
            edadPrevista: "11 Años",
            administrada: "No",
            fechaAdmin: "-",
            lugar: "-"
        }]),
    createData('HPV', 1, 0, [
        {
            nroDosis: 1,
            edadPrevista: "11 Años",
            administrada: "Sí",
            fechaAdmin: "20-9-2000",
            lugar: "Hospital Italiano"
        }])
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Vacuna</TableCell>
                        <TableCell align="right">Dosis Totales</TableCell>
                        <TableCell align="right">Dosis Administradas</TableCell>
                        <TableCell align="right">Dosis Pendientes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.nombre} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}