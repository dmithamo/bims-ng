import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { MainFooterComponent } from '../shared/components/main-footer/main-footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, LogoComponent, MainFooterComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
