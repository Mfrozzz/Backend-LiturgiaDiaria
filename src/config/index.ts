import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    api: {
        uri: process.env.API_BASE_URL,
    },
    jwtSecret: process.env.JWT_SECRET,
};

export default config;