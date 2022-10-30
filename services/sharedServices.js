// Since the models are coming as arguments, there is no need to import them here.
// Making the same function reusable for different data models, instead of having to
// write the same function multiple times

const titleExists = async (title, model) => {
  const alreadyExists = (await model.findOne({ title: title }).exec())
    ? true
    : false;
  return alreadyExists;
};
const subtitleExists = async (subtitle, model) => {
  const alreadyExists = (await model.findOne({ subtitle: subtitle }).exec())
    ? true
    : false;
  return alreadyExists;
};

// const findProductByTitle = async (title) => {
//   const foundProduct = await Book.findOne({ title: title }).exec();
//   return foundProduct;
// };

// const findProductByAuthor = async (title) => {
//   const foundProduct = await Book.findOne({ title: title }).exec();
//   return foundProduct;
// };

const deleteById = async (id, model) => {
  try {
    const deletedItem = await model.findByIdAndDelete(id).exec();
    if (!deletedItem) {
      throw {
        status: 404,
        message: "Can't find Item with the id",
      };
    }
    return deletedItem;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const updateById = async (id, object, model) => {
  console.log("id", id);
  console.log("object", object);
  try {
    const updatedItem = await model.findByIdAndUpdate(id, object, {
      new: true,
    });
    console.log("updatedItem", updatedItem);
    return updatedItem;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getItemById = async (id, model) => {
  console.log("id", id);
  try {
    const itemToGet = await model.findById(id).exec();
    return itemToGet;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export default {
  titleExists,
  subtitleExists,
  //   findProductByTitle,
  //   findProductByAuthor,
  deleteById,
  updateById,
  getItemById,
};
