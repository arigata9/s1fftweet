'use-strict';

const express = require('express');

// Starting express
// eslint-disable-next-line prefer-const
let app = express();

/*
* Defining engines
*/
app.engine('html', require('ejs').renderFile);

app.set('view-engine', 'ejs');

/*
*   Defining Routes
*/

// index
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3003);
