import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SummariesComponent } from './summaries/summaries.component';
import { InsightsComponent } from './insights/insights.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: SummariesComponent,
      },
      {
        path: 'insights',
        component: InsightsComponent,
      },
    ],
  },
];
