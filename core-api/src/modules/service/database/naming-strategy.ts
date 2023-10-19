import { CONSTRAINTS_KEY_SUFFIXES } from '@constants';
import pluralize from 'pluralize';
import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class NamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  tableName(className: string, customName: string): string {
    return customName || pluralize(snakeCase(className));
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    return (
      snakeCase(embeddedPrefixes.concat('').join('_')) +
      (customName || snakeCase(propertyName))
    );
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(relationName + '_' + referencedColumnName);
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    _firstPropertyName: string,
    _secondPropertyName: string,
  ): string {
    return firstTableName + '_' + secondTableName;
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string,
  ): string {
    return snakeCase(tableName + '_' + (columnName ?? propertyName));
  }

  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    referencedTablePath?: string,
    referencedColumnNames?: string[],
  ): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;

    return `${tableName}_${columnNames.join('_')}_${
      referencedTablePath ?? ''
    }_${referencedColumnNames?.join('_') ?? ''}_${
      CONSTRAINTS_KEY_SUFFIXES.FOREIGN_KEY
    }`;
  }

  uniqueConstraintName(
    tableOrName: string | Table,
    columnNames: string[],
  ): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;

    return `${tableName}_${columnNames.join('_')}_${
      CONSTRAINTS_KEY_SUFFIXES.UNIQUE_KEY
    }`;
  }

  primaryKeyName(tableOrName: string | Table, _columnNames: string[]): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;

    return `${tableName}_${CONSTRAINTS_KEY_SUFFIXES.PRIMARY_KEY}`;
  }

  indexName(
    tableOrName: string | Table,
    columnNames: string[],
    where?: string,
  ): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;

    return `${tableName}_${columnNames.join('_')}${where ? '_' + where : ''}_${
      CONSTRAINTS_KEY_SUFFIXES.INDEX
    }`;
  }
}
