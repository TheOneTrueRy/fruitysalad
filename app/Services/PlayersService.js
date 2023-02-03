import { appState } from "../AppState.js"
import { PlayersController } from "../Controllers/PlayersController.js"
import { Player } from "../Models/Player.js"
import { setHTML, setText } from "../Utils/Writer.js"


class PlayersService{

  SetPlayer(formData) {
    let currentPlayer = appState.players.find(player => player.name == formData.name)
    appState.player = currentPlayer

    if(!currentPlayer){
      let player = new Player(formData)
      appState.players.push(player)
      appState.emit('players')
      let currentPlayer = appState.players.find(player => player.name == formData.name)
      appState.player = currentPlayer
    }
  }

}

export const playersService = new PlayersService()