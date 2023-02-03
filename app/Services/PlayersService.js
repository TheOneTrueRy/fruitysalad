import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"

class PlayersService{
  SetPlayer(formData) {
    let currentPlayer = appState.players.find(player => player.name == formData.name)

    if(!currentPlayer){
      let player = new Player(formData)
      appState.players.push(player)
      appState.emit('players')
    }
    appState.player = currentPlayer
  }

}

export const playersService = new PlayersService()