const express = require('express');

const app = express();
const db = require('./config/db');

app.set('port', process.env.port || 4000);

app.get('/Advantage', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  db.query('select * from Advantage', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Advantage :', data);
    }
    res.send(data);
  });
});

app.get('/Technology', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  db.query('select * from Technology', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Technology:', data);
    }
    res.send(data);
  });
});

app.get('/WorkSiteList', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  db.query('select * from WorkSite_List', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('WorkSite_List: ', data);
    }
    res.send(data);
  });
});

app.listen(app.get('port'), () => {
  console.log(`connection port is : ${app.get('port')}`);
});
