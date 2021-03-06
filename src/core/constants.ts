export enum STEPS {
  USER = 0,
  PRIVACY,
  DONE
}

export const VALIDATION_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const VALIDATION_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{9,32}$/;
