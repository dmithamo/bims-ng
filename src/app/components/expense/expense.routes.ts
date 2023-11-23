import { Routes } from '@angular/router';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseComponent } from './expense.component';

export const expenseRoutes: Routes = [
  {
    path: '',
    title: 'Expense',
    component: ExpenseComponent,
    children: [
      {
        path: 'create',
        component: CreateExpenseComponent,
      },
      {
        path: ':id',
        component: ExpenseDetailsComponent,
        children: [
          {
            path: 'edit',
            component: CreateExpenseComponent,
          },
        ],
      },
    ],
  },
];
