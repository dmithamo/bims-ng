import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../shared/components/logo/logo.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
