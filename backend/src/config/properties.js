import dotenv from "dotenv";

dotenv.config();

const properties = {
  PORT: process.env.PORT || 3000,

  MONGO_URI:
    process.env.MONGO_URI ||
    `mongodb+srv://clashgamers:blackcoffee21@cluster0.oflsn.mongodb.net/?retryWrites=true&w=majority`,
    
  JWT_SECRET: process.env.JWT_SECRET || `ACbef98c98414c7aee466d26fb1ccc57c5`,

  JWT_EXPIRE: process.env.JWT_EXPIRE || `24h`,

  CLIENT_URL: process.env.CLIENT_URL,

  SERVER_URL: process.env.SERVER_URL || `https://dashboard-server-production.up.railway.app`,

};

export default properties;
