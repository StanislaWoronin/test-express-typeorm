import { body } from 'express-validator';
import { userValidationConstant } from './userValidationConstant';
import { checkLastNameOrPhoneExists } from './check-last-name-exists.validation';

export const fistNameValidation = body('firstName')
	.trim()
	.isString()
	.isLength({ min: 1, max: userValidationConstant.firstName.maxLength });

export const lastNameValidation = body('lastName')
	.trim()
	.isString()
	.isLength({ min: 1, max: userValidationConstant.lastName.maxLength })
	.custom(checkLastNameOrPhoneExists);

export const phoneNumberValidation = body('phoneNumber')
	.trim()
	.isString()
	.isMobilePhone('any')
	.custom(checkLastNameOrPhoneExists);
