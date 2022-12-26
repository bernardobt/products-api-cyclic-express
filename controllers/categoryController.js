import categoryService from "../services/categoryService.js";

export const getCategories = async (req, res) => {
  try {
    const allCategories = await categoryService.getCategories();
    res.status(200).send({ data: allCategories });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({
      message: "Name is required for registering a new Category",
    });

  try {
    await categoryService.addCategory({
      name,
    });

    res.status(201).json({ success: `New Category ${name} created!` });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({
      message: "ID is required for deleting a Category",
    });
  try {
    await categoryService.deleteCategory(id);
    res.status(201).json({ success: `Category ${id}: successfully deleted` });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};

export const updateCategory = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  try {
    const updatedCategory = await categoryService.updateCategory(id, {
      name,
    });
    res.status(200).send({ status: "OK", data: updatedCategory });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
