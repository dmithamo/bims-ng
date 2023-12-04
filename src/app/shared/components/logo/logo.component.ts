import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
