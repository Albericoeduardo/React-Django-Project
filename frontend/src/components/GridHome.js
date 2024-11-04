import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../slices/productSlices';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.productStore.products)
  const removeFromTable = (codigo) => {
    dispatch(removeProduct(codigo))
  }

  return (
    <TableContainer sx={{ mt:1, p:1}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#Código</TableCell>
            <TableCell align="right">#Nome</TableCell>
            <TableCell align="right">#Quantidade</TableCell>
            <TableCell align="right">#Valor unitário</TableCell>
            <TableCell align="right">#Descrição</TableCell>
            <TableCell align="right">#Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          products ?
            products.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{row.qtd}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={(e) => {removeFromTable(row.codigo)}}
                  ></DeleteIcon>
                </TableCell>
              </TableRow>
            )) :
            rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
