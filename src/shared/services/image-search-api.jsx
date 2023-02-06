import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    per_page: 12,
    key: '31957804-7ea8105ad7bc82cd0f7ef445f',
  },
});

export const searchImages = async (q, page) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });

  return data;
};
