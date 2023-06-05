import { Router } from 'express';
import { UserController } from './api/user.controller';
import { container } from '../../composition-root';
import { createUserMiddleware } from './middleware/create-user.middleware';

export const usersRouter = Router({});
const userController = container.resolve(UserController);

usersRouter.post(
	'',
	createUserMiddleware,
	userController.createUser.bind(userController),
);
