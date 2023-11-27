import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceOverviewComponent } from '../balance-overview/balance-overview.component';
import { ExpenseOverviewComponent } from '../expense-overview/expense-overview.component';

@Component({
  selector: 'app-summaries',
  standalone: true,
  imports: [CommonModule, BalanceOverviewComponent, ExpenseOverviewComponent],
  templateUrl: './summaries.component.html',
  styleUrl: './summaries.component.css',
})
export class SummariesComponent {}
