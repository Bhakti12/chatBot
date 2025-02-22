import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  OPENAI_SECRET_KEY: process.env.OPENAI_SECRET_KEY
};