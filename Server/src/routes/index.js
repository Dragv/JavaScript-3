// Copyright (C) 2020 Alejandro Guereca Valdivia
import fs from 'fs';

export default fs.readdirSync(`${__dirname}`)
  .filter(file => file.includes('.js') && !file.includes('index'))
  .map(file => file.split('.')[0])
  .reduce((routes, currentRoutesName) => {
    routes[currentRoutesName] = require(`./${currentRoutesName}.js`).default;
    return routes;
  }, {});
