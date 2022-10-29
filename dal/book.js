import sharedServices from "../services/sharedServices.js";

// Model are being imported here because the are used as arguments for shared functions that can be reused
// for different data models
import Book from "../models/bookModel.js";

const getBooks = async () => {
  try {
    const books = await Book.find().exec();
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
  console.log("bookToAdd.title", bookToAdd.title);
  console.log("titleAlreadyExists", titleAlreadyExists);
  const subtitleAlreadyExists = await sharedServices.subtitleExists(
    bookToAdd.subtitle,
    Book
  );
  console.log("subtitleAlreadyExists", subtitleAlreadyExists);
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
    throw { status: 500, message: error?.message || error };
  }
};

export default {
  getBooks,
  addBook,
};
