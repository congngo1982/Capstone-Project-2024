import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
};

//Gôm action, contains, reducer vào 1 chung nơi gọi là slice
 
export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    //Định ngĩa các action
    menu_bar: (state,{payload}) => {
      state.isOpen = payload
    },

  },
})

export const { menu_bar } = headerSlice.actions;
export const selectMenuBar = state => state.header.isOpen;

export default headerSlice.reducer