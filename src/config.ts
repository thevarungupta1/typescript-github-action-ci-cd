import dotenv from 'dotenv';

dotenv.config();

export const config = {
    appName: process.env.APP_NAME || 'My App',
    appEnv: process.env.APP_ENV || 'development',
    apiUrl: process.env.API_URL || 'http://localhost:3000'
}