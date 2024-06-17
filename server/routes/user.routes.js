import express from 'express';
 // const express = require('express');
const urlRoutes = express.Router();

import controller from '../controllers/user.controller.js';
// const controller = require('../controllers/user.controller');

import { validateRequestFields } from '../middlewares/validation.middleware.js';

urlRoutes.post('/', validateRequestFields, controller.createUser);
  urlRoutes.get('/', controller.getAllUsers);
 // urlRoutes.put('/:id', controller.updateOneRequest);
urlRoutes.delete('/:id', controller.deleteUser);
  // urlRoutes.get/:id/account_details
   urlRoutes.get('/:id', controller.getUserById);
export default urlRoutes;