import { Router } from 'express';
import { container } from '../../composition-root';
import { endpoints } from '../../shared/routing';
import { TestingController } from './testing.controller';

export const testingRouter = Router({});
const testingController = container.resolve(TestingController);

testingRouter.delete(
	endpoints.testing.clearDb,
	testingController.clearDb.bind(testingController),
);
