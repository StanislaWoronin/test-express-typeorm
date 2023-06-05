import { TestingRepository } from './testing.repository';
import { Request, Response } from 'express';
import {injectable} from "inversify";

@injectable()
export class TestingController {
	constructor(protected testingRepository: TestingRepository) {}

	async clearDb(req: Request, res: Response) {
		try {
			await this.testingRepository.clearDb();
			return res.sendStatus(204);
		} catch (e) {
			console.error('Try clear db:', e);
		}
	}
}
