import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css',
})
export class ExpenseComponent {
  constructor(private router: Router) {}
  public handleExpenseClicked(index: number) {
    this.router.navigate(['expense', index]);
  }
}
