/**
 * @author Alfredo Barragán
 * @date 2024-06-01
 * @description Function to get the path of a category in a nested category structure.
 */

/**
 * This function takes a nested category structure and a category name, and returns the path to that category as a string.
 * If the category is not found, it returns null.
 */
export type Category = {
  name: string;
  subcategories: Category[];
};

/**
 *  Finds the path to a category in a nested category structure.
 * @param categories - The list of categories to search through.
 * @param categoryName - The name of the category to find.
 * @returns The path to the category as a string, or null if not found.
 */
export const getCategoryPath = (
  categories: Category[],
  categoryName: string,
): string | null => {
  const search = (cats: Category[], target: string): string[] | null => {
    for (const cat of cats) {
      if (cat.name === target) return [cat.name];

      const sub = search(cat.subcategories, target);
      if (sub) return [cat.name, ...sub];
    }
    return null;
  };

  const result = search(categories, categoryName);
  return result ? `/${result.join("/")}` : null;
};
