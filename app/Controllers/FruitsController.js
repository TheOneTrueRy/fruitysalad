import { appState } from "../AppState.js"

function _drawRandomFruit(){
  let randomFruit = appState.fruits[Math.floor(Math.random()*appState.fruits.length)]
  console.log(randomFruit)
}

export class FruitsController{
  constructor(){
    _drawRandomFruit()
  }
}