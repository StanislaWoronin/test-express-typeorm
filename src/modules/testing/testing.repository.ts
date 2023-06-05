import { injectable } from 'inversify';
import { DataSource } from 'typeorm';

@injectable()
export class TestingRepository {
	constructor(private dataSource: DataSource) {}

	async clearDb() {
		const entities = this.dataSource.entityMetadatas;
		const tableNames = entities.map(entity => `"${entity.tableName}"`).join(', ');

		await this.dataSource.query(`TRUNCATE ${tableNames} CASCADE;`);

		return;
	}
}
