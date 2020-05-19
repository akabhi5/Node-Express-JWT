const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const postRoute = require('./routes/posts');


app.use(morgan('tiny'));

// imported routes
const authRoute = require('./routes/auth');

dotenv.config();

// connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to db')
);


// middleware
app.use(express.json());


// route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);



app.listen(3000, () => console.log('Server is running!'));