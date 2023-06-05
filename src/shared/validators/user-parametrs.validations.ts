import { body } from 'express-validator';
import { validationConstant } from './validation.constant';
import { checkLastNameExists } from './check-last-name-exists.validation';

export const fistNameValidation = body('firstName')
	.trim()
	.isEmpty()
	.isString()
	.isLength({ max: validationConstant.firstName.maxLength });

export const lastNameValidation = body('lastName')
	.trim()
	.isEmpty()
	.isString()
	.isLength({ max: validationConstant.lastName.maxLength })
	.custom(checkLastNameExists);

export const phoneNumberValidation = body('phoneNumber')
	.trim()
	.isEmpty()
	.isString()
	.isMobilePhone('any');
