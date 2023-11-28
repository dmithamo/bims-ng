import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InsightsComponent } from './insights/insights.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: InsightsComponent,
      },
    ],
  },
];
