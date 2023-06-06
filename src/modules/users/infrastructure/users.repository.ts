import { injectable } from 'inversify';
import { AppDataSource } from '../../../index';
import { User } from '../entity/user.entity';

@injectable()
export class UsersRepository {
	async checkLastNameExists(lastName: string): Promise<boolean> {
		return await AppDataSource.getRepository(User).exist({
			where: { lastName },
		});
	}

	async createUser(user: User): Promise<User> {
		return await AppDataSource.getRepository(User).save(user);
	}
}
