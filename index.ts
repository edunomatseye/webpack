const express = require('express');
const path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = '5000';

import { Application, Request, Response } from 'express';
const app: Application = express();

const { Product, products } = require('./productList');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req: Request, res: Response) => {
    console.log('Welcome to the hotspot');
    res.status(200).json({ message: 'Welcome to the hotspot area!'})
})

app.get('/products', (req: Request, res: Response) => {
    console.log('show all products in the gallery!')
    res.status(200).json({products})
})



app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})