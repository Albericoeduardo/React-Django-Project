import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        products:state.products.filter((item) => item.codigo !== action.payload)
      }
    }
  },
})

export const filterProductsAsync = async (query) => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/products/filter/${query}`)
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, filterProduct } = productSlice.actions

export default productSlice.reducer