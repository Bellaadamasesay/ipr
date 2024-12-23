export type NavigationItem = {
  title: string;
  href: string;
  description?: string;
};


export type RegistrationStatus = 'pending' | 'reviewing' | 'approved' | 'rejected';

export type IPRType = 'patent' | 'trademark' | 'copyright' | 'trade-secret';

export interface User {
  id: string;
  email: string;
}