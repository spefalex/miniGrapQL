import express from 'express';
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema/schema';
import cors from 'cors';
const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MyAppli');

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to GraphQL'
    })
});
app.use(cors()) 
app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
  
}));
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});