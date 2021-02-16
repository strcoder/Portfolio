import axios from 'axios';
import { API_URL } from '../config';

export const getData = async ({ id, token, route }: any) => {
  const url = id ? `${API_URL}/api/${route}/${id}` : `${API_URL}/api/${route}`;
  if (token) {
    const data = await axios({
      url,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    }).then(({ data }) => {
      return data.data;
    });
    return data;
  }
  const data = await axios({
    url,
    method: 'get',
  }).then(({ data }) => {
    return data.data;
  });
  return data;
};

export default getData;
