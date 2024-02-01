import './localEnv.js';
import {conn} from './db/conn.js';conn();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import usersRoutes from './routes/users.js';
import profileRoutes from './routes/profiles.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/profiles', profileRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});





app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});