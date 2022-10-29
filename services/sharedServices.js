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

export default {
  titleExists,
  subtitleExists,
  //   findProductByTitle,
  //   findProductByAuthor,
};
