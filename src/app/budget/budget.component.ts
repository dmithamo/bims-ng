import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './budget.component.html',
})
export class BudgetComponent {}
