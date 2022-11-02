import userService from "../services/userService.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await userService.getUsers();
    res.send({ status: "OK", data: allUsers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({
      message: "ID is required for getting information of a user",
    });
  try {
    const user = await userService.getUserById(id);

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(error?.status || 500).json({ message: error });
  }
};
