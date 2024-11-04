import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

export default function SimplePaper() {
  const [qdtItens, setQtdItens] = useState()
  const [total, setTotal] = useState()
  const products = useSelector(state => state.productStore.products)

  useEffect(() =>{
    setQtdItens(products.reduce((total, item) => Number(total) + (Number(item.qtd) || 1), 0))
    setTotal(products.reduce((total, item) => Number(total) + (Number(item.valor) * (Number(item.qtd) || 1)), 0).toFixed(2))
  }, [products])

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 250,
        },
      }}
    >
      <Paper elevation={3}>
        <h4>Resumo</h4>
        <hr></hr>
        <p>Total: <b>R${total}</b></p>
        <p>Itens: <b>{qdtItens}</b></p>
        <Button variant="outlined">Finalizar compra</Button>
      </Paper>
    </Box>
  );
}
