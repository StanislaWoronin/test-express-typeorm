import request from 'supertest';
import { endpoints } from '../../shared/routing';
import { app } from '../../index';

export class Testing {
	async clearDb(): Promise<number> {
		const response = await request(app).delete(`${endpoints.testing.clearDb}`);

		return response.status;
	}
}
