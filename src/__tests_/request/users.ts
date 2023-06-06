import request from 'supertest';
import { endpoints } from '../../shared/routing';
import { CreateUserDto } from '../../modules/users/dto/create-user.dto';
import { TestingRequestDto } from '../types/testing-request.dto';
import { User } from '../../modules/users/entity/user.entity';
import { app } from '../../index';

export class Users {
	async createUser(dto: CreateUserDto): Promise<TestingRequestDto<User>> {
		const response = await request(app)
			.post(`${endpoints.users.baseUrl}`)
			.send(dto);
		console.log(dto);
		return { body: response.body, status: response.status };
	}
}
