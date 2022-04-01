import mongose from 'mongoose';
import { MONGODB_URI } from './config.js';

export async function connectDB() {
    try {
        const db = await mongose.connect(MONGODB_URI);
    } catch (error) {
        console.log(error);
    }
}