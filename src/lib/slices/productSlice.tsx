"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiClient } from "../axiosClient";
import { Product } from "../types/products.types";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await ApiClient.get(`products/`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getMenProducts = createAsyncThunk(
  "products/getMenProducts",
  async () => {
    try {
      const response = await ApiClient.get(`products/men`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getWomenProducts = createAsyncThunk(
  "products/getWomenProducts",
  async () => {
    try {
      const response = await ApiClient.get(`products/women`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "products/getOneProduct",
  async (data: { productId: string | string[] }) => {
    try {
      const response = await ApiClient.get(`products/${data.productId}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export interface ProductSlice {
  loading: string;
  oneProduct: Product;
  products: Product[];
  menProducts: Product[];
  womenProducts: Product[];
}

const initialState: ProductSlice = {
  loading: "idle",
  oneProduct: {
    _id: "",
    name: "",
    category: "",
    personType: "",
    description: "",
    quantity: 0,
    price: 0,
    mainImage: "",
    images: [{ src: "", alt: "" }],
  },
  products: [],
  menProducts: [],
  womenProducts: [],
};

export const productsSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(getMenProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.menProducts = action.payload;
      })
      .addCase(getMenProducts.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getMenProducts.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(getWomenProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.womenProducts = action.payload;
      })
      .addCase(getWomenProducts.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getWomenProducts.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.oneProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(getOneProduct.pending, (state, action) => {
        state.loading = "loading";
      });
  },
});

export default productsSlice.reducer;
