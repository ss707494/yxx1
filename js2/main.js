import common from './lib/common.js'
const {f_log, randomInt, getCanvas} = common
import _ from './lib/lodash.min.js'

import adata from './data/index.js'
import update from './update/index.js'
import render from './render/index.js'
import _event from './event/index.js'
const { touchHandler, eventsList, dealEvents } = _event
import collision from './collision/index.js'

export default function Main2() {
  main()
}

let data = {...adata};
let eventsL = eventsList;
let ctx = getCanvas().getContext('2d')
let aniId;
const main = _ => {
  ctx.clearRect(0, 0, getCanvas().width, getCanvas().height)
  const _o = dealEvents(data, eventsL)
  eventsL = _o.eventsList
  data = update(_o.data)
  render(ctx, collision(data))
  if (data.state === 2) {
    window.cancelAnimationFrame(aniId)
    return
  }
  aniId = window.requestAnimationFrame(main)
  return data;
}

getCanvas().addEventListener('touchstart', e => {
  e.preventDefault()
  if (data.state === 2 || data.state === 0) {
    window.cancelAnimationFrame(aniId)
    data = ({...adata, state: 1});
    main();
    return
  }
  eventsL = touchHandler(e, data)
})
