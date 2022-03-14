import { calculateNumberOfPages, getItemsForPage } from './pagination';

describe('calculateNumberOfPages', () => {
  test('should return 1 page when passing the same amount of items and items per page', () => {
    expect(calculateNumberOfPages(9, 9)).toEqual(1);
  });
  test('should return 1 page when passing less items than items per page', () => {
    expect(calculateNumberOfPages(8, 9)).toEqual(1);
  });
  test('should return 2 pages when passing 10 items and 9 items per page', () => {
    expect(calculateNumberOfPages(10, 9)).toEqual(2);
  });
  test('should return 10 pages when passing 100 items and 10 items per page', () => {
    expect(calculateNumberOfPages(100, 10)).toEqual(10);
  });
});

describe('getItemsForPage', () => {
  test('should return the subset of items to be shown based on 3 item array', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(getItemsForPage(items, 0, 2)).toEqual([]);
    expect(getItemsForPage(items, 1, 2)).toEqual([{ id: 1 }, { id: 2 }]);
    expect(getItemsForPage(items, 2, 2)).toEqual([{ id: 3 }]);
    expect(getItemsForPage(items, 3, 2)).toEqual([]);
  });
  test('should return the subset of items to be shown based on 6 item array', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    expect(getItemsForPage(items, 0, 2)).toEqual([]);
    expect(getItemsForPage(items, 1, 2)).toEqual([{ id: 1 }, { id: 2 }]);
    expect(getItemsForPage(items, 2, 2)).toEqual([{ id: 3 }, { id: 4 }]);
    expect(getItemsForPage(items, 3, 2)).toEqual([{ id: 5 }, { id: 6 }]);
    expect(getItemsForPage(items, 4, 2)).toEqual([]);
  });
});
