const express = require('express');
const app = express();
const port = 3000;
const mahasiswaRoute = require('../app/routes/mahasiswaRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Hello Camin MCI Anjay!'));

app.use('/mahasiswa', mahasiswaRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));