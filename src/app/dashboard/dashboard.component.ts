import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExpenseOverviewComponent } from '../transaction/expense-overview/expense-overview.component';
import { BalanceOverviewComponent } from '../transaction/balance-overview/balance-overview.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ExpenseOverviewComponent,
    BalanceOverviewComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
