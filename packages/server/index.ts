import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Todo } from './src/model/todo/Todo';

dotenv.config();

const app = express();
app.use(express.json());

const dbUser = process.env.MONGO_USER;
const dbPassword = process.env.MONGO_PASSWORD;
const dbUri = process.env.MONGO_URI;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@${dbUri}/?retryWrites=true&w=majority`,
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('success');
    }
  }
);

app.get('/', (req: Request, res: Response) => res.send('hi'));

app.get('/find', async (req, res) => {
  const todo = await Todo.findById('63c2251e40e0ea5959bf245e');
  console.log(todo);

  res.send('success');
});

app.get('/delete', async (req, res) => {
  //   const todo = await Todo.deleteOne({ id: '63c22585693e7c95178bbb6c' });
  //   console.log(todo);
});

app.get('/add', async (req, res) => {
  const result = await Todo.create({
    title: 'siema 2',
    status: 'done',
    categories: [
      {
        id: 'abc',
        name: 'Web Development',
      },
      {
        id: 'hhh',
        name: 'Important',
      },
    ],
    project: {
      id: 'react-adv',
      name: 'Learn react hooks',
    },
  });
  console.log(result);
  res.send('success');
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
