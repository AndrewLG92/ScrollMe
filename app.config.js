import 'dotenv/config';

export default {
  name: 'ScrollMe',
  slug: "ScrollMe",
  version: '1.0.0',
  extra: {
    LOCAL_IP: process.env.LOCAL_IP,
    LOCAL_PORT: process.env.LOCAL_PORT,
    HTTPS_PORT: process.env.HTTPS_PORT,
  },
  newArchEnabled: true,
  scheme: 'https',
};  