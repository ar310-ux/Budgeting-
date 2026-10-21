export const categories = ['Housing', 'Groceries', 'Dining', 'Transportation', 'School', 'Entertainment', 'Other'];
export const cents = value => Math.round(Number(value) * 100);
export const money = value => new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(value / 100);
export function summarize(transactions, month, budgets = {}) {
  const rows = transactions.filter(t => t.date.slice(0, 7) === month);
  const income = rows.filter(t => t.type === 'income').reduce((s,t) => s+t.amount,0);
  const spent = rows.filter(t => t.type === 'expense').reduce((s,t) => s+t.amount,0);
  const byCategory = Object.fromEntries(categories.map(c => [c, rows.filter(t => t.type === 'expense' && t.category === c).reduce((s,t) => s+t.amount,0)]));
  const budget = Object.values(budgets).reduce((s,v) => s+v,0);
  return { rows, income, spent, balance:income-spent, remaining:budget-spent, byCategory };
}
