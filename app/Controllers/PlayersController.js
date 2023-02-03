
import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { gamesService } from "../Services/GamesService.js"
import { playersService } from "../Services/PlayersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPlayers(){
  let template = ''
  appState.players.forEach(p => template += p.PlayerTemplate)
  setHTML('players', template)
}

export class PlayersController{
  constructor(){
    console.log('PlayerController works')
    _drawPlayers()
    appState.on('players', _drawPlayers)
  }
  

  handleFormSubmission(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      playersService.SetPlayer(formData)
      gamesService.StartGame()
      playersService.DrawPlayer()
      setTimeout(_drawPlayers, 60000)
      // @ts-ignore
      bootstrap.Offcanvas.getOrCreateInstance('#offcanvasBottom').hide()
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }



//   let players = []
// loadPlayers()

// function setPlayer(event){
//   event.preventDefault()
//   let form = event.target

//   let playerName = form.playerName.value

//   currentPlayer = players.find(player => player.name == playerName)

//   if(!currentPlayer){
//     currentPlayer = {name: playerName, topScore: 0 }
//     players.push(currentPlayer)
//     savePlayers()
//   }
}