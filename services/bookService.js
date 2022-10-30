import BookDAL from "../dal/book.js";

const getBooks = async () => {
  try {
    const allBooks = await BookDAL.getBooks();
    return allBooks;
  } catch (error) {
    throw error;
  }
};

const addBook = async (bookObject) => {
  try {
    const createdBook = await BookDAL.addBook(bookObject);
    return createdBook;
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await BookDAL.deleteBook(id);
    return deletedBook;
  } catch (error) {
    throw error;
  }
};

const updateBook = async (bookId, bookObject) => {
  try {
    const updatedBook = await BookDAL.updateBook(bookId, bookObject);
    return updatedBook;
  } catch (error) {
    throw error;
  }
};

const getBookById = async (id) => {
  try {
    const book = await BookDAL.getBookById(id);
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
