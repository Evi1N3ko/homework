import express from 'express';
// const express = require('express');
const userRouter = express.Router();

import userController from '../controllers/user.controller.js';
// const controller = require('../controllers/user.controller');

import { validateRequestFields } from '../middlewares/validation.middleware.js';

userRouter.post('/', validateRequestFields, userController.createUser);
userRouter.get('/', userController.getAllUsers);
// urlRoutes.put('/:id', controller.updateOneRequest);
userRouter.delete('/:id', userController.deleteUser);
// urlRoutes.get/:id/account_details
userRouter.get('/:id', userController.getUserById);
export default userRouter;