import sharedServices from "./sharedServices.js";

// Model are being imported here because the are used as arguments for shared functions that can be reused
// for different data models
import Book from "../models/bookModel.js";

// const getBooks = async () => {
//   try {
//     const books = await Book.find().exec();
//     return books;
//   } catch (error) {
//     throw { status: 500, message: error };
//   }
// };

const getBooks = async () => {
  try {
    const books = await sharedServices.getItems(Book);
    return books;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const addBook = async (bookToAdd) => {
  const titleAlreadyExists = await sharedServices.titleExists(
    bookToAdd.title,
    Book
  );
  const subtitleAlreadyExists = await sharedServices.subtitleExists(
    bookToAdd.subtitle,
    Book
  );
  if (titleAlreadyExists && subtitleAlreadyExists)
    throw {
      status: 409,
      mesage: "Title and Subtitle already registered",
    };

  try {
    const newBook = await new Book(bookToAdd);
    await newBook.save();
    return newBook;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const deleteBook = async (bookId) => {
  try {
    await sharedServices.deleteById(bookId, Book);
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const updateBook = async (bookId, bookObject) => {
  const titleAlreadyExists = await sharedServices.titleExists(
    bookObject.title,
    Book
  );
  const subtitleAlreadyExists = await sharedServices.subtitleExists(
    bookObject.subtitle,
    Book
  );
  if (titleAlreadyExists && subtitleAlreadyExists)
    throw {
      status: 409,
      mesage: "Title and Subtitle already registered",
    };

  try {
    const updatedUser = await sharedServices.updateById(
      bookId,
      bookObject,
      Book
    );
    return updatedUser;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

const getBookById = async (bookId) => {
  try {
    const itemToGet = await sharedServices.getItemById(bookId, Book);
    return itemToGet;
  } catch (error) {
    throw { status: 500, message: error?.message?.message || error };
  }
};

export default {
  getBooks,
  addBook,
  deleteBook,
  updateBook,
  getBookById,
};
