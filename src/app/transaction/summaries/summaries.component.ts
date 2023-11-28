import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceOverviewComponent } from '../balance-overview/balance-overview.component';
import { ExpenseOverviewComponent } from '../expense-overview/expense-overview.component';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { SecondaryNavComponent } from '../../shared/components/secondary-nav/secondary-nav.component';
import { APP_ROUTE } from '../../shared/constants/routes.constants';
import { IncomeOverviewComponent } from '../income-overview/income-overview.component';

@Component({
  selector: 'app-summaries',
  standalone: true,
  imports: [
    CommonModule,
    BalanceOverviewComponent,
    ExpenseOverviewComponent,
    LinkButtonComponent,
    SectionHeaderComponent,
    PageHeaderComponent,
    SecondaryNavComponent,
    IncomeOverviewComponent,
  ],
  templateUrl: './summaries.component.html',
})
export class SummariesComponent {
  protected readonly APP_ROUTE = APP_ROUTE;
}
