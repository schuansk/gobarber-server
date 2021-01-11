import { de } from 'date-fns/locale';

export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '1d',
  },
};
