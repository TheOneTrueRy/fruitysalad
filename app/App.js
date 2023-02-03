import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayersController } from "./Controllers/PlayersController.js";
import { GamesController } from "./Controllers/GamesController.js";

class App {
  //valuesController = new ValuesController();
  playersController = new PlayersController()
  gamesController = new GamesController()
}

window["app"] = new App();
