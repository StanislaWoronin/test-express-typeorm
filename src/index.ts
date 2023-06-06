import 'reflect-metadata';
import express from 'express';
import { settings } from './settings';
import { endpoints } from './shared/routing';
import { doctorRouter } from './modules/doctor';
import { testingRouter } from './modules/testing/testing.router';
import { usersRouter } from './modules/users';
import { AppDataSource } from './modules/providers/typeorm/app-data-source';
import { DataSource } from 'typeorm';
import { rejects } from 'assert';

export const app = express();
const port = settings.port;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to doctor-api');
});

app.use(endpoints.doctor.baseUrl, doctorRouter);
app.use(endpoints.testing.baseUrl, testingRouter);
app.use(endpoints.users.baseUrl, usersRouter);

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

export const getDataSource = (delay = 5000): Promise<DataSource> => {
	if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

	return new Promise((resolve, rejects) => {});
};
