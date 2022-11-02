import DAL from "../dal/dal.js";
import User from "../models/userModel.js";

const getUsers = async () => {
  try {
    const allUsers = await DAL.getItems(User);
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await DAL.getItemById(id, User);
    return user;
  } catch (error) {
    throw error;
  }
};

export default {
  getUsers,
  getUserById,
};
