// Copyright (C) 2020 Alejandro Guereca Valdivia
'use strict';

import Express from 'express';
import SessionController from '../controllers/SessionController.js';

// eslint-disable-next-line new-cap
const Router = Express.Router();
const { createNewSession, subscribeNewPlayer, update } = SessionController;

// Only responsability is to declare routes for the specific data
// entity and call the correct controller logic

Router.post('/create', createNewSession);
Router.post('/subscribe/:sessionCode', subscribeNewPlayer);
Router.post('/update', update);

export default Router;
