import { Routes } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionComponent } from './transaction.component';

export const transactionRoutes: Routes = [
  {
    path: '',
    title: 'Expense',
    component: TransactionComponent,
    children: [
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
