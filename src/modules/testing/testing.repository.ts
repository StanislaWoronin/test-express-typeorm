import { injectable } from 'inversify';

import {myDataSource} from "../../providers/typeorm/my-data-source";

@injectable()
export class TestingRepository {
	async clearDb() {
		const entities = myDataSource.entityMetadatas;
		const tableNames = entities.map(entity => `"${entity.tableName}"`).join(', ');

		await myDataSource.query(`TRUNCATE ${tableNames} CASCADE;`);

		return;
	}
}
