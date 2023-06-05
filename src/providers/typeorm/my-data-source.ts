import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'admin',
	database: 'doctor_api',
	entities: ['src/providers/entities/*.js'],
	logging: true,
	synchronize: true,
});
