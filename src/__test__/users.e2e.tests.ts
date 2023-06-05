import app, { startApp } from '../main';
import request from 'supertest';
import { endpoints } from '../shared/routing';
import { Testing } from './request/testing';
import { Users } from './request/users';
import { preparedUser } from './prepared-data/prepared-user';

describe('users', () => {
	const second = 1000;
	jest.setTimeout(5 * second);

	let testingRequest: Testing;
	let usersRequest: Users;

	beforeAll(async () => {
		startApp();
	});

	describe('', () => {
		it('Clear data base.', async () => {
			await testingRequest.clearDb();
		});

		it('Try create user, with empty input data', async () => {
			const response = await usersRequest.createUser(preparedUser.empty);
			expect(response.status).toBe(400);
			console.log(response.body);
		});

		it('Try create user, with long input data', async () => {
			const response = await usersRequest.createUser(preparedUser.long);
			expect(response.status).toBe(400);
			console.log(response.body);
		});

		it('Should create user.', async () => {
			const response = await usersRequest.createUser(preparedUser.long);
			expect(response.status).toBe(201);
			console.log(response.body);
		});
	});
});
