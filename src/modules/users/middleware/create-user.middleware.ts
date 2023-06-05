import { inputValidation } from '../../../shared/validators/imput.validation';
import {
	fistNameValidation,
	lastNameValidation,
	phoneNumberValidation,
} from '../../../shared/validators/user-parametrs.validations';

export const createUserMiddleware = [
	fistNameValidation,
	inputValidation,
	lastNameValidation,
	phoneNumberValidation,
];
