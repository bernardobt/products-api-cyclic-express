import express from "express";

/* import controllers */
import { getUsers, getUserById } from "../../controllers/userController.js";

const router = express.Router();

/* routing of the controllers */

// goes to controller. controller goes to the service.
// service goes to dal.
// dal interects with db
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
