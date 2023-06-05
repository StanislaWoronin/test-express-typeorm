import { Container } from 'inversify';
import { UserController } from './modules/users/api/user.controller';
import { UsersService } from './modules/users/domain/users.service';
import { UsersRepository } from './modules/users/infrastructure/users.repository';
import { TestingController } from './modules/testing/testing.controller';
import { TestingRepository } from './modules/testing/testing.repository';

export const container = new Container();

container.bind(TestingController).toSelf();
container.bind<TestingRepository>(TestingRepository).toSelf();

container.bind(UserController).toSelf();
container.bind<UsersService>(UsersService).toSelf();
container.bind<UsersRepository>(UsersRepository).toSelf();
