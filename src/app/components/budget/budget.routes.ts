import { Routes } from '@angular/router';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';

export const budgetRoutes: Routes = [
  {
    path: '',
    title: 'Budget',
    children: [
      {
        path: 'list',
        component: BudgetListComponent,
      },
      {
        path: 'create',
        component: CreateBudgetComponent,
      },
    ],
  },
];
