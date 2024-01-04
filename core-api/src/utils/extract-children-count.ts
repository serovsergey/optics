export const extractChildrenCount = (item) => ({
  ...item,
  childrenCount: 'children' in item._count ? item._count.children : 0,
});
