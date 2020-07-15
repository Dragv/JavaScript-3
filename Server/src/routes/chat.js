// Copyright (C) 2020 Alejandro Guereca Valdivia
'use strict';

import Express from 'express';
import ChatController from '../controllers/ChatController.js';

// eslint-disable-next-line new-cap
const Router = Express.Router();
const { send } = ChatController;

// Only responsability is to declare routes for the specific data
// entity and call the correct controller logic

Router.post('/send/:sessionId/:playerId', send);

export default Router;
