import { injectable } from 'inversify';
import { User } from '../entity/user.entity';
import { AppDataSource } from '../../providers/typeorm/app-data-source';

@injectable()
export class UsersRepository {
	async checkLastNameOrPhoneExists(lastNameOrPhone: string): Promise<boolean> {
		try {
			const res = await AppDataSource.getRepository(User).exist({
				where: [{ lastName: lastNameOrPhone }, { phoneNumber: lastNameOrPhone }],
			});
			console.log({ res });
			return res;
		} catch (e) {
			console.log(e);
		}
	}

	async createUser(user: User): Promise<User> {
		return await AppDataSource.getRepository(User).save(user);
	}
}
