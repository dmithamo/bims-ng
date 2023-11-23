import { Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';

export const expenseRoutes: Routes = [
  {
    path: 'expense',
    title: 'Expense',
    children: [
      {
        path: 'list',
        component: ExpenseListComponent,
      },
      {
        path: 'create',
        component: CreateExpenseComponent,
      },
      {
        path: ':id/edit',
        component: CreateExpenseComponent,
      },
    ],
  },
];
