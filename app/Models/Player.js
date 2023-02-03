import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Player{
  constructor(data){
    this.name = data.name
    this.highScore = data.highScore || 0
    this.id = generateId()
    this.score = 0
  }

  get PlayerTemplate(){
    return `
    <p>${this.name} - High Score: ${this.highScore}</p>
    `
  }

  get CurrentPlayer(){
    return `
    <p>${this.name} - Score: ${this.score}
    `
  }
}