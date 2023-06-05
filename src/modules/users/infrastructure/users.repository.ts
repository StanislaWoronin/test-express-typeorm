import { User } from '../../../providers/entities/user.entity';
import { injectable } from 'inversify';
import { DataSource } from 'typeorm';
import {myDataSource} from "../../../providers/typeorm/my-data-source";

@injectable()
export class UsersRepository {

	async checkLastNameExists(lastName: string): Promise<boolean> {
		return await myDataSource.getRepository(User).exist({
			where: { lastName },
		});
	}

	async createUser(user: User): Promise<User> {
		return await myDataSource.getRepository(User).save(user);
	}
}
