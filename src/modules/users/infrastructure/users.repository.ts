import { User } from '../../../providers/entities/user.entity';
import { injectable } from 'inversify';
import { DataSource } from 'typeorm';

@injectable()
export class UsersRepository {
	constructor(private dataSource: DataSource) {}

	async checkLastNameExists(lastName: string): Promise<boolean> {
		return await this.dataSource.getRepository(User).exist({
			where: { lastName },
		});
	}

	async createUser(user: User): Promise<User> {
		return await this.dataSource.getRepository(User).save(user);
	}
}
