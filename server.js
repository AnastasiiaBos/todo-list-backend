const express = require('express');
const app = express();
const routes = require('./ListRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = 3000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then( () => console.log('Connected to Mongo DB'))
.catch(err => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`We are on Port ${PORT}`));