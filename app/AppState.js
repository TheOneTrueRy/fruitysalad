import { Player } from "./Models/Player.js"
import { Fruit } from "./Models/Game.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  IDs = []

  timer = 60

  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

   /** @type {import('./Models/Player').Player[]} */
    players = [
    new Player(
      {
        name: 'Moe'
      }
    ),
    new Player(
      {
        name: 'Curly'
      }
    )
    ]

     /** @type {import('./Models/Player').Player} */
    player = null

     /** @type {import('./Models/Game').Fruit[]} */
    fruits = [
      new Fruit(
        {
          name: 'Mango',
          imgURL: './assets/img/mango.png'
        }
      ),
      new Fruit(
        {
          name: 'Orange',
          imgURL: './assets/img/orange.png'
        }
      ),
      new Fruit(
        {
          name: 'Durian',
          imgURL: './assets/img/durian.png'
        }
      ),
      new Fruit(
        {
          name: 'Strawberry',
          imgURL: './assets/img/strawberry.png'
        }
      ),
      new Fruit(
        {
          name: 'Lemon',
          imgURL: './assets/img/lemon.png'
        }
      ),
      new Fruit(
        {
          name: 'Tangerine',
          imgURL: './assets/img/tangerine.png'
        }
      ),
      new Fruit(
        {
          name: 'Grapes',
          imgURL: './assets/img/grapes.png'
        }
      ),
      new Fruit(
        {
          name: 'Banana',
          imgURL: './assets/img/banana.png'
        }
      ),
    ]

    /** @type {import('./Models/Game').Fruit} */
    fruit = null





}



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
