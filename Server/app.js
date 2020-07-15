// Copyright (C) 2020 Alejandro Guereca Valdivia
'use strict';

import Express from 'express';
import Cors from 'cors';
import HTTP from 'http';

const PORT = 3000;

// Importing the routes for levels and entities
import routes from './src/routes/';

class Server {

  constructor() {

    // eslint-disable-next-line new-cap
    this.api = Express();
    this.api
      .use( Express.json() )
      .use( Express.urlencoded({ extended: true }))
      .use(Cors());

    Object.keys(routes).forEach(currentRoutesPathName => this.api.use(`/api/${currentRoutesPathName}/`, routes[currentRoutesPathName]));
  }

  run() {
    this.api.set('port', PORT );
    this.listener = HTTP.createServer( this.api );
    this.listener.listen( PORT );
    this.listener.on('listening', () => {

      const addr = this.listener.address();
      const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

      console.log(`Listneing on ${bind}`);
    });
  }
}

const server = new Server();

server.run();
