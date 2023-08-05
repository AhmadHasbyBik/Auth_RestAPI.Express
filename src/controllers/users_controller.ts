import { getUsers, getUserById, deleteUserById } from "../database/users";
import express from "express";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getUserId = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;

      const users = await getUserById(id);
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { username, email, password} = req.body;

    if (!username || !email) {
      return res.sendStatus(403);
    }

    const user = await getUserById(id);
    user.username = username;
    user.email = email;

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
