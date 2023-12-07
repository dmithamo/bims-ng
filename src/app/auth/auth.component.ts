import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from '../shared/components/main-footer/main-footer.component';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainFooterComponent,
    LogoComponent,
    TransactionComponent,
  ],
  templateUrl: './auth.component.html',
})
export class AuthComponent {}
