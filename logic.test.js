import test from 'node:test';
import assert from 'node:assert/strict';
import {cents,summarize} from './logic.js';
test('monthly totals exclude other months, keep income separate and expose overspending',()=>{
 const data=[{date:'2026-10-01',type:'income',category:'Income',amount:cents(1000)},{date:'2026-10-04',type:'expense',category:'Groceries',amount:cents(100.10)},{date:'2026-10-05',type:'expense',category:'Dining',amount:cents(20.20)},{date:'2026-09-30',type:'expense',category:'Groceries',amount:cents(900)}];
 const result=summarize(data,'2026-10',{Groceries:cents(100)});
 assert.equal(result.income,100000);assert.equal(result.spent,12030);assert.equal(result.balance,87970);assert.equal(result.remaining,-2030);assert.equal(result.byCategory.Groceries,10010);assert.equal(result.rows.length,3);
});
test('empty months and exact-cent arithmetic',()=>{assert.equal(cents('58.42'),5842);const r=summarize([],'2026-11');assert.equal(r.balance,0);assert.equal(r.remaining,0);});
