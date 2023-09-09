import axios from "axios";

export const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": 'ddeaf736abmshe10885571892c04p138e04jsn853fcdb4debc',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromAPi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
