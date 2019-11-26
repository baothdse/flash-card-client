import http from '../utils/http-common';

export default {
  getRandomWord(folderId, cb) {
    const config = {
      withCredentials: true,
      params: {
        folder: folderId,
      },
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
    http
      .get('/card/search', { params: { word } })
      .then((result) => {
        cb(result);
      })
      .catch((err) => {
        throw err;
      });
  },
  add(word, token, cb) {
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
      .post('/card/update', { word })
      .then(result => cb(result))
      .catch((err) => {
        throw err;
      });
  },
  uploadImg(img, token, cb) {
    const formData = new FormData();
    formData.append('image', img);
    http
      .post('/auth/card/img/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          withCredentials: true,
        },
      })
      .then(result => cb(result))
      .catch((err) => {
        throw err;
      });
  },
};
