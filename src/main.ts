import express from 'express';
import { settings } from './settings';
import { myDataSource } from './providers/typeorm/my-data-source';
import { endpoints } from './shared/routing';
import { doctorRouter } from './modules/doctor';
import { usersRouter } from './modules/users';
import { testingRouter } from './modules/testing/testing.router';

export const app = express();
const port = settings.port;

app.get('/', (req, res) => {
	res.send('Welcome to doctor-api');
});

app.use(express.json());
app.use(endpoints.doctor.baseUrl, doctorRouter);
app.use(endpoints.testing.baseUrl, testingRouter);
app.use(endpoints.users.baseUrl, usersRouter);
//
// export const startApp = () => {
// 	myDataSource
// 		.initialize()
// 		.then(() => {
// 			console.log('Data Source has been initialized!');
// 		})
// 		.catch(err => {
// 			console.error('Error during Data Source initialization:', err);
// 		});
//
// 	app.listen(port, () => {
// 		console.log(`App listening on port ${port}`);
// 	});
// };
//
// startApp();
//
// export default app;
