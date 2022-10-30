import express from "express";

/* import controllers */
import {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../../controllers/bookController.js";

const router = express.Router();

/* routing of the controllers */

// goes to controller. controller goes to the service.
// service goes to dal.
// dal interects with db
router.get("/", getBooks);
router.post("/", addBook);
router.get("/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
