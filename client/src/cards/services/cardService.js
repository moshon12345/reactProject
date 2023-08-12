import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';

let cardOfSearch = [];


export const getCardsSearch = async (e) => {
  cardOfSearch = []
  const {data} = await axios.get (`${apiUrl}/cards`);
  if (e) {
      for (let i in data) {
          if (JSON.stringify(data[i]).includes((e).toLowerCase())) {
          cardOfSearch.push(data[i])
        }
      }
        try {
          return Promise.resolve(cardOfSearch);
        } catch (error) {
          return Promise.reject (error.message);
        }
  }
  try {
    const {data} = await axios.get (`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.message);
  }
};

export const getCards = async () => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.message);
  }
};

export const getCard = async id => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards/${id}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const getMyCards = async () => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards/my-cards`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const creatCard = async card => {
  try {
    const {data} = await axios.post (`${apiUrl}/cards`, card);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const editCard = async (card, cardId, userId) => {
  try {
    const {data} = await axios.put (`${apiUrl}/cards/${cardId}`, [card, userId]);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const changeLikeStatus = async cardId => {
  try {
    const {data} = await axios.patch (`${apiUrl}/cards/${cardId}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};

export const deleteCard = async cardId => {
  try {
    const {data} = await axios.delete (`${apiUrl}/cards/${cardId}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};
