import express from "express";

const router = express.Router();

const test = async (req, res) => {
  try {
    res.send({
      status: "OK",
      data: "Please use one of the available endpoints: /api/v1/books ",
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

router.get("/", test);

export default router;
