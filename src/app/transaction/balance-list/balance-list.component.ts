import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-balance-list',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './balance-list.component.html',
})
export class BalanceListComponent {}
