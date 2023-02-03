import { Player } from "./Models/Player.js"
import { Fruit } from "./Models/Fruit.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
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

     /** @type {import('./Models/Fruit').Fruit[]} */
  fruits = [
      new Fruit(
        {
          name: 'Mango',
          imgURL: 'https://purepng.com/public/uploads/large/purepng.com-mangomangofruithalvedfrontalfullsweetfresh-481521564634qp959.png'


        }
      ),
      new Fruit(
        {
          name: 'Orange',
          imgURL: 'https://purepng.com/public/uploads/large/purepng.com-orangeorangefruitfoodtastydeliciousorangecolorclipart-331522582501jsnma.png'
        }
      ),
      new Fruit(
        {
          name: 'Apple',
          imgURL: 'https://th.bing.com/th/id/R.47445eb00cf7127482c7d310cc0ffe12?rik=PFNP336uivUZLQ&riu=http%3a%2f%2fpngimagesfree.com%2fFruit%2fApple%2fone-red-apple-png.png&ehk=ve1FlhuCYBQ%2btxFP3K3skd5sGPw3eS9uve7aNhEiwO4%3d&risl=&pid=ImgRaw&r=0'
        }
      ),
    ]

    /** @type {import('./Models/Fruit').Fruit} */
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
