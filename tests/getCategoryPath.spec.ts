import { getCategoryPath } from '../src/getCategoryPath';
import { categories } from '../src/data';

describe('getCategoryPath', () => {
  test('should return path for deeply nested category', () => {
    expect(getCategoryPath(categories, 'category4'))
      .toBe('/category1/category3/category4');
  });

  test('should return path for second-level category', () => {
    expect(getCategoryPath(categories, 'category2'))
      .toBe('/category1/category2');
  });

  test('should return path for root-level category', () => {
    expect(getCategoryPath(categories, 'category5'))
      .toBe('/category5');
  });

  test('should return null for non-existent category', () => {
    expect(getCategoryPath(categories, 'does-not-exist'))
      .toBeNull();
  });

  test('should return null if category list is empty', () => {
    expect(getCategoryPath([], 'category1'))
      .toBeNull();
  });
});
