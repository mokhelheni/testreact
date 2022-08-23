const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRoutes = require('./routes/users')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.use('/users', usersRoutes)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
