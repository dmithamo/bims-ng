import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {}
