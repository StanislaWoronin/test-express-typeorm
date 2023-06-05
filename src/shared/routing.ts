const doctorsRouter = '/doctors';
const testing = '/testing';
const usersRouter = '/users';

export const endpoints = {
	doctor: {
		baseUrl: doctorsRouter,
		doctorId: `/:doctorId`,
	},
	testing: {
		baseUrl: testing,
		clearDb: `/clear-db`,
	},
	users: {
		baseUrl: usersRouter,
		deleteUser: `/:userId`,
	},
};
