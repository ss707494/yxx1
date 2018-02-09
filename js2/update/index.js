
const addInterval = (num, dealFun) => data => (!data.num || data.num > num) ? ({...dealFun(data), num: 1}) : ({...data, num: data.num + 1})
const changeRotate = data => ({...data, angle: data.angle > 0 ? 0 : 180})
const goDown = n => data => ({...data, y: data.y + n})

const __update = {
  bullet: _.flowRight(addInterval(10, _.flowRight(goDown(10), changeRotate)))
}

const isOut = ({x, y, w, h}) => (x > canvas.width || x + w < 0 || y > canvas.height || y + h < 0)
const update = ({list, ...data}) => {
  let _list = _.filter(list, e => !isOut(e)).map((data) => __update[data.type](data))
  return {...data, list: _list}
}

export default update
