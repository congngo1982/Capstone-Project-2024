import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user : null,
};

////Gôm action, contains, reducer vào 1 chung nơi gọi là slice

// userSlice là kết quả trả về của fuction chứa giá trị return

let userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers : {
        //định nghĩa action
        setLogin: (state, action) => {
            state.user = action.payload;

            //không cần return về object mới khi dùng toolkit

        },
    },
});

export let { setLogin } = userSlice.actions;

export default userSlice.reducer