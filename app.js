const express = require('express');
const bodyParser = require('body-parser');

const expenseRoutes = require('./routes/expensesRoutes');

const app = express();

app.use(bodyParser.json());

app.use(expenseRoutes);

app.use((req, res, next) => {
  console.log('radi');
});

app.use((error, req, res, next) => {
    console.log(error);
});

app.listen(3000);