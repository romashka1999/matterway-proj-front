import axios from "axios";

export const getAllGenres = () => {
  return axios.get(`http://localhost:5000/api/get-all-genres`);
};

export const getBestBookFromGenre = (genre: string) => {
  return axios.get(`http://localhost:5000/api/get-best-book/${genre}`);
};

export const getCheckoutPage = (bestBook: string) => {
  return axios.get(`http://localhost:5000/api/get-checkout-screen/${bestBook}`);
};
