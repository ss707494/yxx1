const data = {};

const toImg = src => {
  let img = new Image()
  img.src = src
  return img
}

const initData = {
    x: 0,
    y: 0,
    angle: 0,
    v_x: 0,
    v_y: 0,
    a_x: 0,
    a_y: 0,
}

data.objName = {
  player: 1
}

data.list = [
  {
    ...initData,
    type: 'bullet',
    img: toImg('images/flappybird/bird1_0.png'),
    x: 60,
    y: 25,
    w: 48,
    h: 48,
    a_y: .5,
  },
  {
    ...initData,
    type: 'bullet',
    img: toImg('images/flappybird/bird1_0.png'),
    x: 20,
    y: 25,
    w: 48,
    h: 48,
    a_y: .5,
  }
]

data.num = 1

export default data
