export default {
  jwt: {
    secret: process.env.APP_SECRET || 'gobarberapplication',
    expiresIn: '1d',
  },
};
