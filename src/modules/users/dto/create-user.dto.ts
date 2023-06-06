import { IUser } from '../users.interface';

export type CreateUserDto = Pick<
	IUser,
	'firstName' | 'lastName' | 'phoneNumber'
>;
