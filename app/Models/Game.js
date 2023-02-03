import { generateId } from "../Utils/generateId.js"

export class Fruit{
  constructor(data){
    this.name = data.name
    this.imgURL = data.imgURL
    this.id = generateId()
  }

  get FruitImage(){
    return `
    <img src="${this.imgURL}" alt="FRUIT" class="no-select">
    `
  }

}