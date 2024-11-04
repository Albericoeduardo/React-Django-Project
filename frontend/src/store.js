import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from './slices/productSlices'

const rootReducers = combineReducers({
    productStore: productReducer
})

export default configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})