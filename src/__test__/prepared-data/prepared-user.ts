import { faker } from '@faker-js/faker';
import { validationConstant } from '../../shared/validators/validation.constant';

export const preparedUser = {
	valid: {
		fistName: 'UserName',
		lastName: 'UserLastName',
		phoneNumber: '8-800-555-35-35',
	},
	empty: {
		fistName: '',
		lastName: '',
		phoneNumber: '',
	},
	long: {
		fistName: faker.string.alpha({
			length: {
				min: validationConstant.firstName.maxLength + 1,
				max: validationConstant.firstName.maxLength + 2,
			},
		}),
		lastName: faker.string.alpha({
			length: {
				min: validationConstant.lastName.maxLength + 1,
				max: validationConstant.lastName.maxLength + 2,
			},
		}),
		phoneNumber: faker.string.alpha(),
	},
};
