import { injectable } from 'inversify';
import { AppDataSource } from '../../index';

@injectable()
export class TestingRepository {
	async clearDb() {
		const entities = AppDataSource.entityMetadatas;
		const tableNames = entities.map(entity => `"${entity.tableName}"`).join(', ');

		await AppDataSource.query(`TRUNCATE ${tableNames} CASCADE;`);

		return;
	}
}
