import bookService from "../services/bookService.js";

export const getBooks = async (req, res) => {
  try {
    const allBooks = await bookService.getBooks();
    res.send({ status: "OK", data: allBooks });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const addBook = async (req, res) => {
  const { title, subtitle, author, synopsis, rating } = req.body;

  if (!title || !author || !synopsis)
    return res.status(400).json({
      message:
        "Title, author and synopsis are required for registering a new book",
    });
  try {
    await bookService.addBook({ title, subtitle, author, synopsis, rating });

    res
      .status(201)
      .json({ success: `New book ${title}: ${subtitle} created!` });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({
      message: "ID is required for deleting a book",
    });
  try {
    await bookService.deleteBook(id);

    res.status(201).json({ success: `Book ${id}: successfully deleted` });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};
