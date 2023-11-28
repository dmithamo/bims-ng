import { Routes } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionComponent } from './transaction.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { APP_ROUTE } from '../shared/constants/routes.constants';
import { SummariesComponent } from './summaries/summaries.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { BalanceListComponent } from './balance-list/balance-list.component';

export const transactionRoutes: Routes = [
  {
    path: '',
    title: 'Transactions',
    component: TransactionComponent,
    children: [
      {
        path: '',
        component: SummariesComponent,
      },
      {
        path: APP_ROUTE.expenses,
        component: ExpenseListComponent,
        children: [
          {
            path: 'create',
            component: CreateTransactionComponent,
          },
          { path: ':id', component: TransactionDetailsComponent },
        ],
      },
      {
        path: APP_ROUTE.incomes,
        component: IncomeListComponent,
      },
      {
        path: APP_ROUTE.balances,
        component: BalanceListComponent,
      },
    ],
  },
];
