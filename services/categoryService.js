import DAL from "../dal/dal.js";
import Category from "../models/categoryModel.js";

const getCategories = async () => {
  try {
    const allCategories = await DAL.getItems(Category);
    return allCategories;
  } catch (error) {
    throw error;
  }
};

const addCategory = async (categoryObject) => {
  try {
    const createdCategory = await DAL.addItem(categoryObject, Category);
    return createdCategory;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (id) => {
  try {
    const deletedCategory = await DAL.deleteById(id, Category);
    return deletedCategory;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async (categoryId, categoryObject) => {
  try {
    const updatedCategory = await DAL.updateById(
      categoryId,
      categoryObject,
      Category
    );
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

export default {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
};
