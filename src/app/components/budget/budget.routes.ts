import { Routes } from '@angular/router';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';

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
      {
        path: ':id',
        component: BudgetDetailsComponent,
      },
      {
        path: ':id/edit',
        component: CreateBudgetComponent,
      },
    ],
  },
];
