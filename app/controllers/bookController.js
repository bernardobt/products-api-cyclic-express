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
  const { tilte, subtilte, author, synopsis, rating } = req.body;

  if (!tilte || !author || !synopsis)
    return res.status(400).json({
      message:
        "Title, author and synopsis are required for registering a new book",
    });
  try {
    await bookService.addBook({ tilte, subtilte, author, synopsis, rating });

    res
      .status(201)
      .json({ success: `New book ${tilte}: ${subtilte} created!` });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};
