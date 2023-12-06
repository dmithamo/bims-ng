import { APP_ROUTE } from '../constants/routes.constants';

export type AppNavItem = {
  path: APP_ROUTE;
  label: string;
  icon: string;
  permissions: string[];
};

export type UUID = ReturnType<typeof crypto.randomUUID>;
