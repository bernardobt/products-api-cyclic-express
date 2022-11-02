import productService from "../services/productService.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await productService.getProducts();
    res.send({ status: "OK", data: allProducts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
