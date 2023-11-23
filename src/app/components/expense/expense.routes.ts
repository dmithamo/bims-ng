import { Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

export const expenseRoutes: Routes = [
  {
    path: '',
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
        path: ':id',
        component: ExpenseDetailsComponent,
      },
      {
        path: ':id/edit',
        component: CreateExpenseComponent,
      },
    ],
  },
];
