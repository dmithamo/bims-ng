import { Routes } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { APP_ROUTE } from '../shared/constants/routes.constants';

export const transactionRoutes: Routes = [
  {
    path: '',
    title: 'Transactions',
    component: TransactionComponent,
    children: [
      {
        path: APP_ROUTE.expenses,
        component: TransactionListComponent,
      },
      {
        path: 'incomes',
        component: TransactionListComponent,
      },
      {
        path: 'balances',
        component: TransactionListComponent,
      },
      {
        path: 'create',
        component: CreateTransactionComponent,
      },
      {
        path: ':id',
        component: TransactionDetailsComponent,
        children: [
          {
            path: 'edit',
            component: CreateTransactionComponent,
          },
        ],
      },
    ],
  },
];
