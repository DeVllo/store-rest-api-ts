import { App } from './app';
import dotenv from 'dotenv';
dotenv.config();
const Main = async () => {
    const app = new App(3000);
    await app.listen();
}

Main();