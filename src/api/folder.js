import http from '../utils/http-common';
import urlConstants from '../constants/url';

export default {
  getTop4RecentFolder(cb) {
    const config = {
      withCredentials: true,
    };
    http
      .get(urlConstants.AUTH_URL + urlConstants.FOLDER_URL + urlConstants.RECENT_URL + urlConstants.TOP_4, config)
      .then((result) => {
        cb(result.data);
      })
      .catch((err) => {
        throw err;
      });
  },
};
