import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.css',
})
export class ExpenseDetailsComponent {}
