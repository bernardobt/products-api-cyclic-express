import express from "express";

/* import controllers */
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../controllers/categoryController.js";

const router = express.Router();

/* routing of the controllers */

// goes to controller. controller goes to the service.
// service goes to dal.
// dal interects with db
router.get("/", getCategories);
router.post("/", addCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
