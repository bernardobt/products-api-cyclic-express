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

const propertyExists = async (property, model) => {
  const alreadyExists = (await model.findOne({ property }).exec())
    ? true
    : false;
  return alreadyExists;
};

const deleteById = async (id, model) => {
  try {
    const deletedItem = await model.findByIdAndDelete(id).exec();
    return deletedItem;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const updateById = async (id, object, model) => {
  try {
    const updatedItem = await model.findByIdAndUpdate(id, object, {
      new: true,
    });
    return updatedItem;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const getItemById = async (id, model) => {
  try {
    const itemToGet = await model.findById(id).exec();
    return itemToGet;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const getItems = async (model) => {
  try {
    const allItems = await model.find().exec();
    return allItems;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const addItem = async (itemToAdd, model) => {
  try {
    const newItem = await new model(itemToAdd);
    await newItem.save();
    return newItem;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

export default {
  titleExists,
  subtitleExists,
  propertyExists,
  addItem,
  deleteById,
  updateById,
  getItemById,
  getItems,
};
