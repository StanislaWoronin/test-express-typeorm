import * as dotenv from 'dotenv';
dotenv.config();

export const settings = {
	port: process.env.PORT,
	postgres: {
		port: Number(process.env.POSTGRESS_PORT),
		username: process.env.POSTGRESS_NAME,
		password: process.env.POSTGRESS_PASSWORD,
		database: process.env.POSTGRESS_DATABASE,
	},
};
