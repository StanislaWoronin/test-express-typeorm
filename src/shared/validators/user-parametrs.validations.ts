import { body } from 'express-validator';
import { userValidationConstant } from './userValidationConstant';
import { checkLastNameExists } from './check-last-name-exists.validation';

export const fistNameValidation = body('firstName')
	.trim()
	.isEmpty()
	.isString()
	.isLength({ min: 1, max: userValidationConstant.firstName.maxLength });

export const lastNameValidation = body('lastName')
	.trim()
	.isEmpty()
	.isString()
	.isLength({ min: 1, max: userValidationConstant.lastName.maxLength })
	.custom(checkLastNameExists);

export const phoneNumberValidation = body('phoneNumber')
	.trim()
	.isEmpty()
	.isString()
	.isMobilePhone('any');
