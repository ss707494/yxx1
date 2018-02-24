import _ from './lib/lodash.min.js'

import adata from './data/index.js'
import update from './update/index.js'
import render from './render/index.js'
import _event from './event/index.js'
const { touchHandler, eventsList, dealEvents } = _event

export default function Main2() {
  main()
}

let data = adata;
let eventsL = eventsList;
let ctx = canvas.getContext('2d')
const main = _ => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  const _o = dealEvents(data, eventsL)
  eventsL = _o.eventsList
  data = update(_o.data)
  render(ctx, data)
  window.requestAnimationFrame(main)
  return data;
}

canvas.addEventListener('touchstart', e => {
  e.preventDefault()
  eventsL = touchHandler(e, data)
})
