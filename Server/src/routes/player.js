// Copyright (C) 2020 Alejandro Guereca Valdivia
'use strict';

import Express from 'express';
import PlayerController from '../controllers/PlayerController.js';

// eslint-disable-next-line new-cap
const Router = Express.Router();
const { getPlayersBySession } = PlayerController;

// Only responsability is to declare routes for the specific data
// entity and call the correct controller logic

Router.get('/:sessionId/', getPlayersBySession);

export default Router;
