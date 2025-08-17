import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  }, 
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;

        let existingItem = state.items.find(element => element.name == action.payload.name);

        if(existingItem){
            existingItem.quantity++;
        } else {
            state.items.push({name, image, cost, quantity:1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(cartItem => cartItem.name != action.payload.name);
    },
    updateQuantity: (state, action) => {
    console.log('state', state);
    console.log('action', action);
    console.log('actualizar quantidade');
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
