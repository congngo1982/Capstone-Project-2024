import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./features/cart-slice";
import courseSlice from "./features/course-slice";
import headerSlice from "./features/header-slice";
import searchSlice from "./features/search-slice";
import wishlistSlice from "./features/wishlist-slice";
import userSlice from "./features/user-slice";

const rootReducer = combineReducers({
  courses:courseSlice,
  search:searchSlice,
  cart:cartSlice,
  wishlist:wishlistSlice,
  header:headerSlice,
  user:userSlice,
 })

 export default rootReducer;