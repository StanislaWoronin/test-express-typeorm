import {DataSource} from 'typeorm';
import {settings} from "../../settings";
import {User} from "../entities/user.entity";


export const myDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: settings.postgres.username,
	password: settings.postgres.password,
	database: settings.postgres.database,
	// entities: ['src/providers/entities/*.js'],
	entities: [User],
	logging: true,
	synchronize: true,
});
