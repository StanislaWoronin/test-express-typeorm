import { Testing } from './request/testing';
import { Users } from './request/users';
import { preparedUser } from './prepared-data/prepared-user';

describe('Test users router.', () => {
	const second = 1000;
	jest.setTimeout(5 * second);

	const testingRequest = new Testing();
	const usersRequest = new Users();

	describe('', () => {
		it('Clear data base.', async () => {
			await testingRequest.clearDb();
		});

		const errorsMessages = {
			errorsMessages: [
				{ message: expect.any(String), field: 'firstName' },
				{ message: expect.any(String), field: 'lastName' },
				{ message: expect.any(String), field: 'phoneNumber' },
			],
		};

		it('Try create user, with empty input data', async () => {
			const response = await usersRequest.createUser(preparedUser.empty);
			expect(response.status).toBe(400);
			expect(response.body).toStrictEqual(errorsMessages);
		});

		it('Try create user, with long input data', async () => {
			const response = await usersRequest.createUser(preparedUser.long);
			expect(response.status).toBe(400);
			expect(response.body).toStrictEqual(errorsMessages);
		});

		it('Should create user.', async () => {
			const response = await usersRequest.createUser(preparedUser.valid);
			console.log(response.body);
			expect(response.status).toBe(201);
			expect(response.body).toStrictEqual({
				id: expect.any(String),
				fistName: preparedUser.valid.firstName,
				lastName: preparedUser.valid.lastName,
				phoneNumber: preparedUser.valid.phoneNumber,
				createdAt: expect.any(String),
			});
		});
	});
});
