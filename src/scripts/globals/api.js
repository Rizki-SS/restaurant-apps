import CONFIG from './config';

const API ={
  list: `${CONFIG.BASE_URL}/list`,
  detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  review: `${CONFIG.BASE_URL}review`,
};

export default API;
