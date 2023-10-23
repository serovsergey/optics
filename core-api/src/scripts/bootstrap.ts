import { dataSource } from 'config/database';
import { Constants } from 'modules/constants/entities';

void (async () => {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  const queryBuilder = dataSource.createQueryBuilder();

  await queryBuilder.insert().into(Constants).values({ id: 1 }).execute();
})();
