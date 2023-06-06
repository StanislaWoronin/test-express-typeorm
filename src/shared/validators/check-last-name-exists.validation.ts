import { CustomValidator } from 'express-validator';
import { container } from '../../composition-root';
import { UsersRepository } from '../../modules/users/infrastructure/users.repository';

const userRepository = container.resolve(UsersRepository);

export const checkLastNameOrPhoneExists: CustomValidator = async (
	lastNameOrPhone,
): Promise<boolean> => {
	const isExists = await userRepository.checkLastNameOrPhoneExists(
		lastNameOrPhone,
	);
	console.log({ isExists });
	return !isExists;
};
