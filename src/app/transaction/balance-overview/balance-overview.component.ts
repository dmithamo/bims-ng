import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { SecondaryNavComponent } from '../../shared/components/secondary-nav/secondary-nav.component';

@Component({
  selector: 'app-balance-overview',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, SecondaryNavComponent],
  templateUrl: './balance-overview.component.html',
})
export class BalanceOverviewComponent {}
