import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData: [],
  userInfo: null
};

export const bazarSlice = createSlice({
  name: 'bazar',
  initialState,
  reducers: {
    addToCart: (state,{payload}) => {
        const item = state.productData.find( (item) => item.id === payload.id)
        if (item) {
          item.quantity += payload.quantity;
        } else {
          state.productData.push(payload);
        }
    },
    
    deleteItem: ( state, {payload} ) =>  {state.productData = state.productData.filter( ( item ) => item.id !== payload.id )},

    resetCart: ( state ) => { state.productData = [] },

    incrementQuantity: ( state, {payload} ) => {
      const itemExist = state.productData.find( ( item ) => item.id === payload.id );
      if ( itemExist ) {
        itemExist.quantity++
      }
    },

    decrementQuantity: ( state, {payload} ) => {
      const itemExist = state.productData.find( ( item ) => item.id === payload.id );
      if ( itemExist && itemExist.quantity >= 2) {
        itemExist.quantity--
      } else {
        return;
      }
    },
    addUser: (state, {payload}) => {
      console.log("hola")
      state.userInfo = payload;
    },
    removeUser: (state) => {
      console.log("hola")
      state.userInfo = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteItem,resetCart,incrementQuantity,decrementQuantity,addUser,removeUser } = bazarSlice.actions