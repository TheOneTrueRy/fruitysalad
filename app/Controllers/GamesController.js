import { appState } from "../AppState.js"
import { gamesService } from "../Services/GamesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

export class GamesController{
  constructor(){

  }

  enterFruit(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      // @ts-ignore
      form.reset()
      if(formData.name == appState.fruit.name){
        appState.player.score++
        gamesService.DrawRandomFruit()
      }else{
        Pop.error('Hoho you missed that one, TRY ANOTHER!')
      }
    } catch (error) {
      Pop.error(error)
    }
  }
}