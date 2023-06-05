import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../../modules/users';
import { validationConstant } from '../../shared/validators/validation.constant';

@Entity()
export class User implements IUser {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'character varying',
		nullable: false,
		length: validationConstant.firstName.maxLength,
		collation: 'C',
	})
	fistName: string;

	@Column({
		type: 'character varying',
		nullable: false,
		length: validationConstant.lastName.maxLength,
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

	static create(fistName: string, lastName: string, phoneNumber: string) {
		const createdUser = new User();
		createdUser.fistName = fistName;
		createdUser.lastName = lastName;
		createdUser.phoneNumber = phoneNumber;

		return createdUser;
	}
}
