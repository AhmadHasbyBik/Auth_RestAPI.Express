import express from 'express';
import { isAuthenticated, isOwner } from '../middlewares';
import { deleteUser, getAllUsers, getUserId, updateUser } from '../controllers/users_controller'

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.get('/users/:id', isAuthenticated, getUserId);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
}