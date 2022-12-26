import productService from "../services/productService.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await productService.getProducts();
    res.status(200).json({ data: allProducts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({
      message: "ID is required for getting information of a product",
    });
  try {
    const product = await productService.getProductById(id);

    res.status(200).json({ data: product });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};
