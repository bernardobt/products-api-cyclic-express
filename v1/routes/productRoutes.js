import express from "express";

/* import controllers */
import {
  getProducts,
  getProductById,
  //   addProduct,
  //   updateProduct,
  //   deleteProduct,
} from "../../controllers/productController.js";

const router = express.Router();

/* routing of the controllers */

// goes to controller. controller goes to the service.
// service goes to dal.
// dal interects with db
router.get("/", getProducts);
router.get("/:id", getProductById);
// router.post("/", addProduct);
// router.patch("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;
