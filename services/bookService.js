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

export default {
  getBooks,
  addBook,
};
