import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import { settings } from './settings';
import { User } from './modules/users/entity/user.entity';
import { endpoints } from './shared/routing';
import { doctorRouter } from './modules/doctor';
import { testingRouter } from './modules/testing/testing.router';
import { usersRouter } from './modules/users';

export const app = express();
const port = settings.port;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to doctor-api');
});

app.use(endpoints.doctor.baseUrl, doctorRouter);
app.use(endpoints.testing.baseUrl, testingRouter);
app.use(endpoints.users.baseUrl, usersRouter);

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: settings.postgres.port,
	username: settings.postgres.username,
	password: settings.postgres.password,
	database: settings.postgres.database,
	// entities: ['src/providers/entities/*.js'],
	entities: [User],
	logging: true,
	synchronize: true,
});

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
		app.listen(port, () => {
			console.log(`App listening on port ${port}`);
		});
	})
	.catch(err => {
		console.error('Error during Data Source initialization:', err);
	});
