import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import tripRoutes from './routes/tripRoutes';


dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use('/api/trips', tripRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
