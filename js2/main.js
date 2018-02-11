import _ from './lib/lodash.min.js'

import adata from './data/index.js'
import update from './update/index.js'
import render from './render/index.js'
import touchHandler from './event/index.js'

export default function Main2() {
  main()
}

let data = adata;
let ctx = canvas.getContext('2d')
const main = _ => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  data = update(data)
  render(ctx, data)
  window.requestAnimationFrame(main)
  return data;
}
canvas.addEventListener('touchstart', touchHandler)
