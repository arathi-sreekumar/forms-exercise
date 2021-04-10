export interface User {
  name: string;
  role?: string;
  email: string;
  password: string;
}

export interface Privacy {
  allowTrayProductEmails: boolean;
  allowOtherProductEmails: boolean;
}
