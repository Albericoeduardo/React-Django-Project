import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  filterProductsAsync
} from '../slices/productSlices';
import { Button } from '@mui/material';

export default function BasicTextFields() {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.productStore.products)
  const [item, setItem] = useState();
  const [quantidade, setQuantidade] = useState();

  const buscarItem = async (e) => {
    const item = await filterProductsAsync(e)

    if (item) {
      setItem(item)
    }
  }

  const addToTable = (item) => {
    item.qtd=quantidade
    dispatch(addProduct(item))
  }

  useEffect(()=>{
    console.log(products)
  },[products])

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Item" 
        variant="outlined" 
        onChange={(e) => buscarItem(e.target.value)}
      />
      <TextField 
        id="outlined-basic"
        label="Quantidade"
        variant="outlined"
        onChange={(e) => setQuantidade(e.target.value)}
      />
      {
        item ?
        item.map((i, index) => 
          <Button
            key={index}
            onClick={(e) => addToTable(i)}
          >{i.nome}</Button>
        ) :
        (<h4></h4>)
      }
    </Box>
  );
}
