let expenses = [
  {
    expType: 'travel',
    accRep: 'petra',
    date: '23.2.2022',
    note: 'abc',
    money: '30',
  },
  {
    expType: 'other',
    accRep: 'petra',
    date: '23.2.2022',
    note: 'abc',
    money: '30',
  },
];

module.exports = class Expense {
  constructor(expType, accRep, date, note, money) {
    this.expType = expType;
    this.accRep = accRep;
    this.date = date;
    this.note = note;
    this.money = money;
  }

  save() {
    expenses.push(this);
  }

  static fetchAll() {
    return expenses;
  }

  static fetchFilter(filt) {
    return expenses.filter(expType => expType.expType === filt);
  }

  static delete(id) {
     expenses = expenses.filter((el, idF) => idF !== +id);
  }
};
