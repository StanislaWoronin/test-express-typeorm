import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../users.interface';
import { userValidationConstant } from '../../../shared/validators/userValidationConstant';
import { randomUUID } from 'crypto';

@Entity()
export class User implements IUser {
	@PrimaryGeneratedColumn('uuid')
	id: string = randomUUID();

	@Column({
		type: 'character varying',
		nullable: false,
		length: userValidationConstant.firstName.maxLength,
		collation: 'C',
	})
	firstName: string;

	@Column({
		type: 'character varying',
		nullable: false,
		length: userValidationConstant.lastName.maxLength,
		collation: 'C',
	})
	lastName: string;

	@Column({
		type: 'character varying',
		nullable: false,
	})
	phoneNumber: string;

	@Column({
		type: 'character varying',
		nullable: false,
	})
	createdAt: string = new Date().toISOString();

	constructor() {}

	static create(fistName: string, lastName: string, phoneNumber: string) {
		const createdUser = new User();
		createdUser.firstName = fistName;
		createdUser.lastName = lastName;
		createdUser.phoneNumber = phoneNumber;

		return createdUser;
	}
}
