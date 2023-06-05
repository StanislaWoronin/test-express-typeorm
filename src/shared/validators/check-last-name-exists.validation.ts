import { CustomValidator } from 'express-validator';
import { container } from '../../composition-root';
import { UsersRepository } from '../../modules/users/infrastructure/users.repository';

const userRepository = container.resolve(UsersRepository);

export const checkLastNameExists: CustomValidator = async (
	lastName,
): Promise<boolean> => {
	const isExists = await userRepository.checkLastNameExists(lastName);

	return !isExists;
};
