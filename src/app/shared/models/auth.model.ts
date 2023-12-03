export type SessionUser = {
  username: string;
  email: string;
  role: UserRole;
  permissions: string[];
  avatar?: string;
};

export type SessionId = `${string}-${string}-${string}-${string}`;

export enum UserRole {
  superAdmin = 'super-admin',
  admin = 'admin',
  user = 'user',
}
