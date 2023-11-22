export const parseWhere = (where) => {
  if (!where) {
    return undefined;
  }
  const [field, operator, value] = where.split('_');
  return {
    [field]: {
      [operator]: value,
    },
  };
};
