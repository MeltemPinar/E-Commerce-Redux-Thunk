//Aksiyon oluşturan fonkiyonlar

import axios from "axios";

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};
export const setProducts = (payload) => {
  return {
    type: "SET_PRODUCTS",
    payload,
  };
};
export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};
export const getData = () => {
  return (dispatch) => {
    dispatch(setLoading());
    axios
      .get("http://localhost:3040/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
