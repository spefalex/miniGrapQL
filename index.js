import express from 'express';
import graphlHTTP from 'express-graphql';
import MongoClient from 'mongoose';
import schema from './schema/schema';
import cors from 'cors';
const app = express();
const PORT = 3000;
MongoClient.connect('mongodb://localhost:27017/MyAppli', {
  useNewUrlParser: true
});

app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to GraphQL'
  });
});
app.use(cors());
app.use(
  '/graphql',
  graphlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
