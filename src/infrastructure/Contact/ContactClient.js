/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BASE_URL = "https://64c26d15eb7fd5d6ebcfd7b9.mockapi.io/contacts";

export const fetchListContact = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    const navigate = useNavigate();
    navigate("/error");
  }
};

export const fetchContactDetail = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    const navigate = useNavigate();
    navigate("/error");
  }
};
