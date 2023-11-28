import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './expense-list.component.html',
})
export class ExpenseListComponent {}
