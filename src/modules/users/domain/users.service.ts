import { UsersRepository } from '../infrastructure/users.repository';
import { User } from '../../../providers/entities/user.entity';

export class UsersService {
	constructor(protected usersRepository: UsersRepository) {}

	async createUser(fistName: string, lastName: string, phoneNumber: string) {
		const user = User.create(fistName, lastName, phoneNumber);
		const createdUser = await this.usersRepository.createUser(user);
	}
}
