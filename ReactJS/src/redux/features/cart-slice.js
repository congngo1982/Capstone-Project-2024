import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartCourses:typeof window !== 'undefined' && localStorage.getItem('cart_items') ? 
  JSON.parse(localStorage.getItem('cart_items')) : [],
  is_cart_open:false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_open:(state,{payload}) => {
      state.is_cart_open = payload;
    },
    cart_course: (state,{payload}) => {
     const courseIndex = state.cartCourses.findIndex(item => item.id === payload.id);
     if(courseIndex >= 0){
      state.cartCourses[courseIndex].quantity +=1;
      toast.info('Increase course Quantity', {
        position: 'top-left'
      })
     }
     else {
      const tempCourse = {...payload,quantity:1};
      state.cartCourses.push(tempCourse)
      toast.success(`${payload.title} added to cart`, {
        position: 'top-left'
      })
     }
     localStorage.setItem('cart_items', JSON.stringify(state.cartCourses))
    },
    decrease_quantity:(state,{payload}) => {
      const cartIndex = state.cartCourses.findIndex(item => item.id === payload.id);
      if(state.cartCourses[cartIndex].quantity > 1){
        state.cartCourses[cartIndex].quantity -= 1
        toast.error(`Decrease cart quantity`, {
          position: 'top-left'
        })
      }
      localStorage.setItem('cart_items', JSON.stringify(state.cartCourses))
    },
    remove_cart_course:(state,{payload}) => {
      state.cartCourses = state.cartCourses.filter(item => item.id !== payload.id);
      toast.error(`remove from your cart`, {
        position: 'top-left'
      })
     localStorage.setItem('cart_items', JSON.stringify(state.cartCourses))
    },
    clear_cart:(state,{payload}) => {
      const confirmMsg = window.confirm('Are you sure deleted your all cart items ?');
      if(confirmMsg){
        state.cartCourses = [];
      }
      localStorage.setItem('cart_items', JSON.stringify(state.cartCourses))
    }
  },
})

export const {cart_course,remove_cart_course,decrease_quantity,clear_cart,cart_open} = cartSlice.actions;

export const cartCourses = state => state.cart.cartCourses;
export const selectCartOpen = state => state.cart.is_cart_open;
export default cartSlice.reducer