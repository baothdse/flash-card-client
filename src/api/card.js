import http from '../utils/http-common';

export default {
  getRandomWord(cb) {
    const config = {
      withCredentials: true,
    };
    http
      .get('/auth/card/random', config)
      .then((result) => {
        cb(result);
      })
      .catch((err) => {
        throw err;
      });
  },
  searchWord(word, cb) {
    const config = {
      withCredentials: true,
      params: { word },
    };
    http
      .get('/auth/card/search', config)
      .then((response) => {
        cb(response.data);
      })
      .catch((err) => {
        throw err;
      });
  },
  add(word, cb) {
    const config = {
      withCredentials: true,
    };
    http
      .post('/auth/card/new', { word }, config)
      .then(result => cb(result))
      .catch((err) => {
        throw err;
      });
  },
  update(word, cb) {
    http
      .post('/auth/card/update', { word }, { withCredentials: true })
      .then(result => cb(result))
      .catch((err) => {
        throw err;
      });
  },
  uploadImg(img, cb) {
    const formData = new FormData();
    formData.append('image', img);
    http
      .post('/auth/card/img/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      .then(result => cb(result))
      .catch((err) => {
        throw err;
      });
  },
};
