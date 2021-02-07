const express = require('express')
const ejs = require('ejs')
const paypal = require('paypal-rest-sdk')

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
  });

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.post('/pay', (req, res) => {
    
})

app.listen(3000, () => console.log('Server Started'))