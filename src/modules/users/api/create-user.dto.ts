import { IUser } from '../users.interface';

export type CreateUserDto = Pick<
	IUser,
	'fistName' | 'lastName' | 'phoneNumber'
>;
