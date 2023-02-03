import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"
import { setHTML, setText } from "../Utils/Writer.js"

class GamesService{
  StartGame(){
    appState.timer = 60
    setText('timer', appState.timer)
    setTimeout(this.EndGame, 60000)
    let intervalID = setInterval(this.Countdown, 1000)
    appState.IDs.push(intervalID)
    setHTML('setPlayer', ``)
    setHTML('typing', `<form onsubmit="app.gamesController.enterFruit()"> <input type="text" name="fruit" id="fruit-submit" class="text-center"> </form>`)
    this.DrawRandomFruit()
    }

    Countdown(){
      appState.timer--
      if(appState.timer < 0){
      appState.timer = 0
      }
      setText('timer', appState.timer)
    }
  
    EndGame(){
        if(appState.player.score > appState.player.highScore){
          appState.player.highScore = appState.player.score
        }
        saveState('players', appState.players)
        clearInterval(appState.IDs[0])
        setHTML('setPlayer', `<button type="submit" class="btn rounded myBtn py-2 fs-5" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">Set Player</button>`)
        setHTML('typing', `<h3>Correctly type the name of as many fruit as you can within a minute!</h3>`)
        setHTML('fruit', `<h1>Fruit Salad!</h1>`)
        setText('timer', '')
    }

    DrawRandomFruit(){
      let randomFruit = appState.fruits[Math.floor(Math.random()*appState.fruits.length)]
      console.log(randomFruit)
      setHTML('fruit', randomFruit.FruitImage)
      appState.fruit = randomFruit
      console.log(appState.fruit)
    }
}

export const gamesService = new GamesService()