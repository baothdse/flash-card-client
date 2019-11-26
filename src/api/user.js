import http from '../utils/http-common';
import urlConstants from '../constants/url';

export default {
  // get request cannot send body
  login(username, password, cb) {
    http
      .post(urlConstants.UNAUTH_URL + urlConstants.USER_URL + urlConstants.LOGIN, { username, password }, ({ withCredentials: true }))
      .then((response) => {
        cb(response);
      })
      .catch((err) => {
        throw err;
      });
  },
};
