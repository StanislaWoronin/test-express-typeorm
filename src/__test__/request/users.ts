import  request from 'supertest';
import { endpoints } from '../../shared/routing';
import { CreateUserDto } from '../../modules/users/api/create-user.dto';
import { TestingRequestDto } from '../types/testing-request.dto';
import { User } from '../../providers/entities/user.entity';
import {app} from "../../main";

export class Users {
	async createUser(dto: CreateUserDto): Promise<TestingRequestDto<User>> {
		const response = await request(app)
			.post(`${endpoints.users.baseUrl}`)
			.send(dto);

		return { body: response.body, status: response.status };
	}
}
