import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import userReducer from "./userSlice";
import authSlice from "./authSlice";


const store = configureStore({

 reducer: { car: carReducer,  user: userReducer, auth: authSlice },

});

export default store;