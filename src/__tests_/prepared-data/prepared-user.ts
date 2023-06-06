import { faker } from '@faker-js/faker';
import { userValidationConstant } from '../../shared/validators/userValidationConstant';

export const preparedUser = {
	valid: {
		firstName: 'UserName',
		lastName: 'UserLastName',
		phoneNumber: '+79158391243',
	},
	empty: {
		firstName: '',
		lastName: '',
		phoneNumber: '',
	},
	long: {
		firstName: faker.string.alpha({
			length: {
				min: userValidationConstant.firstName.maxLength + 1,
				max: userValidationConstant.firstName.maxLength + 2,
			},
		}),
		lastName: faker.string.alpha({
			length: {
				min: userValidationConstant.lastName.maxLength + 1,
				max: userValidationConstant.lastName.maxLength + 2,
			},
		}),
		phoneNumber: faker.string.alpha(),
	},
};
