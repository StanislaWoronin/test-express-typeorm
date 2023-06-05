import request from 'supertest';
import app from '../../main';
import { endpoints } from '../../shared/routing';

export class Testing {
	async clearDb(): Promise<number> {
		const response = await request(app).delete(`${endpoints.testing.clearDb}`);

		return response.status;
	}
}
