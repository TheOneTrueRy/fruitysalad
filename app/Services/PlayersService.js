import { appState } from "../AppState.js"
import { PlayersController } from "../Controllers/PlayersController.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"
import { setHTML, setText } from "../Utils/Writer.js"


class PlayersService{

  SetPlayer(formData) {
    let currentPlayer = appState.players.find(player => player.name == formData.name)
    appState.player = currentPlayer

    if(!currentPlayer){
      let player = new Player(formData)
      appState.players.push(player)
      appState.emit('players')
      saveState('players', appState.players)
      let currentPlayer = appState.players.find(player => player.name == formData.name)
      appState.player = currentPlayer
    }
  }

  DrawPlayer(){
    let currentPlayer = appState.player
    setHTML('players', currentPlayer.CurrentPlayer)
  }

}

export const playersService = new PlayersService()