export const parseOrder = (order) => {
  if (!order) {
    return undefined;
  }
  const [field, direction] = order.split('_');
  return {
    [field]: direction,
  };
};
