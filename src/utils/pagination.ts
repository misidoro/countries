export const calculateNumberOfPages = (totalItems: number, itemsPerPage: number) =>
  Math.ceil(totalItems / itemsPerPage);

export const getItemsForPage = (items: any[], page: number, itemsPerPage: number) =>
  items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
