const Expense = require('../models/expense');

exports.getExpenses = (req, res, next) => {
  const expenses = Expense.fetchAll();
  const filter = req.query.filter;
  const expensesF = Expense.fetchFilter(filter);

  if (!filter) return res.status(200).json(expenses);
  return res.status(200).json(expensesF);
};

exports.addExpense = (req, res, next) => {
  const expType = req.body.expType;
  const accRep = req.body.accRep;
  const date = req.body.date;
  const note = req.body.note;
  const money = req.body.money;

  const addExpense = new Expense(expType, accRep, date, note, money);
  addExpense.save();
  res.status(201).json('Uspesno unet expense');
};

exports.deleteExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.delete(id);

  res.status(200).json('Uspesno obrisan expense'); // 204 za brisanje
};
