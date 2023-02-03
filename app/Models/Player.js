import { generateId } from "../Utils/generateId.js"

export class Player{
  constructor(data){
    this.name = data.name
    this.highScore = data.highScore || 0
    this.id = generateId()
  }

  get PlayerTemplate(){
    return `
    <p>${this.name} - High Score: ${this.highScore}</p>
    `
  }
}