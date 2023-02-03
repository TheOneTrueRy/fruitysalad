import { generateId } from "../Utils/generateId.js"

export class Fruit{
  constructor(data){
    this.name = data.name
    this.imgURL = data.imgURL
    this.id = generateId()
  }
}