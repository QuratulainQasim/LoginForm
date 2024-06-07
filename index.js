const express = require('express');
const app = express();
const cors = require('cors');
const port = 4500;

const currencies = {
  USD: { name: 'United States Dollar', symbol: '$' },
  EUR: { name: 'Euro', symbol: '€' },
  JPY: { name: 'Japanese Yen', symbol: '¥' },
  GBP: { name: 'British Pound Sterling', symbol: '£' },
  AUD: { name: 'Australian Dollar', symbol: 'A$' },
  CAD: { name: 'Canadian Dollar', symbol: 'C$' },
  CHF: { name: 'Swiss Franc', symbol: 'CHF' },
  CNY: { name: 'Chinese Yuan', symbol: '¥' },
  SEK: { name: 'Swedish Krona', symbol: 'kr' },
  NZD: { name: 'New Zealand Dollar', symbol: 'NZ$' }
};


app.get('/api/currencies', (req, res) => {
  res.json(currencies);
});

app.get('/api/get-currency', (req, res) => {
  const symbol = req.query.symbol ? req.query.symbol.toUpperCase() : null;
  if (symbol && currencies[symbol]) {
    res.json(currencies[symbol]);
  } else {
    res.status(404).json({ error: 'Currency not found' });
  }
}); 

app.listen(port, () => {
  console.log(`Currency API listening at http://localhost:${port}`);
});


//  this is currency api there are two methods of data fetch on frontend mean there are two methods of api that are used to 
// communicat the data between frontend and backend
// 1. Get   2. post
// and the two types of api 
// WebSocket and rest 
