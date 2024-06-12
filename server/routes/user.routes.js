import express from 'express';
 // const express = require('express');
const urlRoutes = express.Router();

import controller from '../controllers/user.controller.js';
// const controller = require('../controllers/user.controller');

import { validateRequestFields } from '../middlewares/validation.middleware.js';

urlRoutes.post('/', validateRequestFields, controller.createOne);
  urlRoutes.get('/', controller.getAll);
 // urlRoutes.put('/:id', controller.updateOneRequest);
urlRoutes.delete('/:id', controller.deleteOne);
  // /:id/account_details
  // getbyid /:id
export default urlRoutes;