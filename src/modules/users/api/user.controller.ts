import { Request, Response } from 'express';
import { UsersService } from '../domain/users.service';
import { injectable } from 'inversify';

@injectable()
export class UserController {
	constructor(protected usersService: UsersService) {}

	async createUser(req: Request, res: Response) {
		try {
			const { fistName, lastName, phoneNumber } = req.body;
			const createdUser = await this.usersService.createUser(
				fistName,
				lastName,
				phoneNumber,
			);

			return res.status(201).send(createdUser);
		} catch (e) {
			console.log(e);
			return res.status(500).send('Something went wrong.');
		}
	}
}
