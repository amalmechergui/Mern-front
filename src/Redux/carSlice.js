import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk("car/getCars", async (payload) => {
 try {
   const { data } = await axios.get("http://localhost:5000/api/cars");
   return data;
 } catch (error) {
   console.log(error);
 }
});

export const createCar = createAsyncThunk(
 "car/createCar",
 async (payload) => {
   try {
     const { data } = await axios.post(
       "http://localhost:5000/api/cars",
       payload
     );
     return data;
   } catch (error) {
     console.log(error);
   }
 }
);

export const deleteCar = createAsyncThunk("car/deleteCar", async (id) => {
 try {
   const { data } = await axios.delete(
     `http://localhost:5000/api/cars/${id}`
   );
   return data;
 } catch (error) {
   console.log(error);
 }
});

export const updateCar = createAsyncThunk(
 "car/updateBrand",
 async ({ id, Brand, Model, Features, Color, ImgUrl }) => {
   console.log(id, Brand, Model, Features, Color, ImgUrl);
   try {
     const { data } = await axios.put(
       `http://localhost:5000/api/cars/${id}`,
       { Brand, Model, Features, Color, ImgUrl }
     );
     return data;
   } catch (error) {
     console.log(error);
   }
 }
); 

const carSlice = createSlice({
 name: "car",
 initialState: {
  loading: false,
    createdCar: null,
    deletedCar: null,
    updatedCar: null,
    /////
   
    Model: "",
    Features: "",
    Color: "",
    ImgUrl: "",
    Price:"",
    postedBy:"",
 },
 extraReducers: (builder) => {

   builder.addCase(getCars.pending, (state) => {
     state.loading = true;
   });
   builder.addCase(getCars.fulfilled, (state, action) => {
     state.mycars = action.payload;
     state.loading = false;
   });
   builder.addCase(getCars.rejected, (state) => {
     state.loading = false;
   });
   ///////
   builder.addCase(createCar.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(createCar.fulfilled, (state, action) => {
    state.loading = false;
    state.createdCar = action.payload;
  });
  builder.addCase(createCar.rejected, (state) => {
    state.loading = false;
  });
  //////////
  builder.addCase(deleteCar.pending, (state) => {
   state.loading = true;
 });
 builder.addCase(deleteCar.fulfilled, (state, action) => {
   state.loading = false;
   state.deletedCar = action.payload;
 });
 builder.addCase(deleteCar.rejected, (state) => {
   state.loading = false;
 });
 ////////
 builder.addCase(updateCar.pending, (state) => {
  state.loading = true;
});
builder.addCase(updateCar.fulfilled, (state, action) => {
  state.loading = false;
  state.updatedCar = action.payload;
});
builder.addCase(updateCar.rejected, (state) => {
  state.loading = false;
});
},
});

export default carSlice.reducer;