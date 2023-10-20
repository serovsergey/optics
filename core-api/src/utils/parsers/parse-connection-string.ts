export interface ConnectionOptions {
  protocol?: string;
  username?: string;
  password?: string;
  host?: string;
  port?: number;
  database?: string;
}

export const parseConnectionString = (
  connectionString = '',
  { includeProtocolName } = { includeProtocolName: false },
): ConnectionOptions => {
  const regex =
    /(?<protocol>\w+):\/\/(?:(?<username>\w*)(?::(?<password>\w*))?@)?(?<host>[\w.-]+)(?::(?<port>\d+))?(?:\/(?<database>[\w-]+))?/;

  const match = regex.exec(connectionString);
  const connectionOptions = Object.entries(
    match?.groups || {},
  ).reduce<ConnectionOptions>((acc, [group, value]) => {
    if (value) {
      if (group === 'port') {
        return { ...acc, [group]: parseInt(value, 10) };
      }
      if (group !== 'protocol' || includeProtocolName) {
        return { ...acc, [group]: value };
      }
    }
    return acc;
  }, {});
  return connectionOptions;
};
