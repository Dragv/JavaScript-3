// Copyright (C) 2020 Alejandro Guereca Valdivia

class SessionController {
  createNewSession(request, response) {
    // Send that list to the front as a payload
    const result = {
      msg: 'NOT_IMPLEMENTED',
      error: 0
    };

  response.json(result);
  }

  subscribeNewPlayer(request, response) {
    // Send that list to the front as a payload
    const params = { ...request.params, ...request.body };
    
    console.log(params);
    
    const result = {
      msg: 'NOT_IMPLEMENTED',
      error: 0
    };

    response.json(result);
  }

  update(request, response) {
    // Send that list to the front as a payload
    const result = {
      msg: 'NOT_IMPLEMENTED',
      error: 0
    };

  response.json(result);
  }
}

export default new SessionController();
