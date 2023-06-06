import { DataSource } from 'typeorm';
import { settings } from '../../../settings';
import { User } from '../../users/entity/user.entity';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: settings.postgres.port,
	username: settings.postgres.username,
	password: settings.postgres.password,
	database: settings.postgres.database,
	entities: [User],
	logging: true,
	synchronize: true,
});
