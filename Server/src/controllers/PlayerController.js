// Copyright (C) 2020 Alejandro Guereca Valdivia

class PlayerController {
  getPlayersBySession(request, response) {
    // Send that list to the front as a payload
    const result = {
      msg: 'NOT_IMPLEMENTED',
      error: 0
    };

    response.json(result);
  }
}

export default new PlayerController();