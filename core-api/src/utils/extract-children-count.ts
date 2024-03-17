export const extractChildrenCount = <T extends { _count?: any }>(item: T) => ({
  ...item,
  childrenCount: 'children' in item._count ? item._count.children : 0,
});
