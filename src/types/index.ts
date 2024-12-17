export type NavigationItem = {
  title: string;
  href: string;
  description?: string;
};

export type IPRType = 'patent' | 'trademark' | 'copyright' | 'trade-secret';

export type RegistrationStatus = 'pending' | 'reviewing' | 'approved' | 'rejected';