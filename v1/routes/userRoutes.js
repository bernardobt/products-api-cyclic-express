import express from "express";

/* import controllers */
import {
  getUsers,
  getUserById,
  getProductsByUserById,
} from "../../controllers/userController.js";

const router = express.Router();

/* routing of the controllers */

// goes to controller. controller goes to the service.
// service goes to dal.
// dal interects with db
router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/:id/info", getProductsByUserById);

export default router;
