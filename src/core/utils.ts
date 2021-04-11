import { VALIDATION_EMAIL_REGEX, VALIDATION_PASSWORD_REGEX } from './constants';

/**
 * Returns valid state for a required value, true if falid and false if not
 * @param {string} value
 * @returns boolean
 */
export const validateRequired = (value: string) => {
  if (!value || !value.length) {
    return false;
  }

  return true;
}

/**
 * Returns valid state for email, true if falid and false if not
 * @param {string} email
 * @returns boolean
 */
export const validateEmail = (email: string) => {
  if (VALIDATION_EMAIL_REGEX.test(email)) {
    return true;
  }

  return false;
}

/**
 * Returns valid state for a password, true if falid and false if not
 * @param {string} password
 * @returns boolean
 */
export const validatePassword = (password: string) => {
  if (VALIDATION_PASSWORD_REGEX.test(password)) {
    return true;
  }

  return false;
}

export const validate = {
  required: validateRequired,
  email: validateEmail,
  password: validatePassword
}
