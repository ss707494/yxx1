import common from '../lib/common.js'
const {f_log} = common

const updateSelf = option => data => ({...data, x: data.x + data.v_x, y: data.y + data.v_y, v_x: data.v_x + data.a_x, v_y: data.v_y + data.a_y})
const addInterval = (num, option = 'num') => dealFun => data => (!data[option] || data[option] > num) ? ({...dealFun(data), [option]: 1}) : ({...data, [option]: data[option] + 1})
const changeRotate = data => ({...data, angle: (data.v_y) > 0 ? 180 : 0})
const goDown = n => data => ({...data, y: data.y + n})
const __update = {
  bullet: addInterval(1)(_.flowRight(updateSelf(), changeRotate))
}
const isOut = ({x, y, w, h}) => (x > canvas.width || x + w < 0 || y > canvas.height || y + h < 0)

const update = ({list, ...data}) => {

  let _list = _.map(list, e => (e.y - canvas.height + e.h > 0 && e.v_y > 0) ? {...e, v_y: -(e.v_y - 1 > 0 ? e.v_y -1 : 0)} : e).filter(e => !isOut(e)).map((data) => __update[data.type](data))
  return {...data, list: _list}
}

export default update
