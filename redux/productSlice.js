import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: "",
  reducers: {
    getAllProducts(state, action) {
      return action.payload;
    },
    editProduct(state, action){
      const selectedCar = state.find((car)=> car.id === action.payload.id)
      
    },
    deleteProduct(state, action){
      return state.filter((car)=> car.id !== action.payload)
    }
    
  },
});

const { actions, reducer } = productSlice;
export const { getAllProducts, deleteProduct, editProduct} = actions;
export default reducer;
