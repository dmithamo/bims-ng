import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceOverviewComponent } from '../balance-overview/balance-overview.component';
import { ExpenseOverviewComponent } from '../expense-overview/expense-overview.component';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-summaries',
  standalone: true,
  imports: [
    CommonModule,
    BalanceOverviewComponent,
    ExpenseOverviewComponent,
    LinkButtonComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './summaries.component.html',
})
export class SummariesComponent {}
