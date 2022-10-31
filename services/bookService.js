import DAL from "../dal/dal.js";
import Book from "../models/bookModel.js";

const getBooks = async () => {
  try {
    const allBooks = await DAL.getItems(Book);
    return allBooks;
  } catch (error) {
    throw error;
  }
};

const addBook = async (bookObject) => {
  const titleAlreadyExists = await DAL.titleExists(bookObject.title, Book);
  const subtitleAlreadyExists = await DAL.subtitleExists(
    bookObject.subtitle,
    Book
  );
  if (titleAlreadyExists && subtitleAlreadyExists)
    throw {
      status: 409,
      mesage: "Title and Subtitle already registered",
    };
  try {
    const createdBook = await DAL.addItem(bookObject, Book);
    return createdBook;
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await DAL.deleteById(id, Book);
    return deletedBook;
  } catch (error) {
    throw error;
  }
};

const updateBook = async (bookId, bookObject) => {
  try {
    const updatedBook = await DAL.updateById(bookId, bookObject, Book);
    return updatedBook;
  } catch (error) {
    throw error;
  }
};
const getBookById = async (id) => {
  try {
    const book = await DAL.getItemById(id, Book);
    return book;
  } catch (error) {
    throw error;
  }
};

export default {
  getBooks,
  addBook,
  deleteBook,
  updateBook,
  getBookById,
};
