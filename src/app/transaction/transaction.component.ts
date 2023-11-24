import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  constructor(private router: Router) {}
  public handleExpenseClicked(index: number) {
    this.router.navigate(['expense', index]);
  }
}
