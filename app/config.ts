import * as dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
};
