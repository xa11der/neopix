const express = require('express');

const expenses = require('../controllers/expenses');
const mware = require('../util/routeAuthorization');

const router = express.Router();

router.get('/', expenses.getExpenses);

router.post('/', mware, expenses.addExpense);

router.delete('/:id', mware ,expenses.deleteExpense);

module.exports = router;