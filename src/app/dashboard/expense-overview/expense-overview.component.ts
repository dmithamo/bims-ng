import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-overview.component.html',
  styleUrl: './expense-overview.component.css',
})
export class ExpenseOverviewComponent {}
