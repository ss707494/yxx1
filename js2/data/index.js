import common from '../lib/common.js'
const {f_log, randomInt, toImg} = common

const data = {
  score: 0,
  state: 0,
};

const initData = {
    x: 0,
    y: 0,
    angle: 0,
    v_x: 0,
    v_y: 0,
    a_x: 0,
    a_y: 0,
}

const _initOnePipe = ({x}) => ({
  ...initData,
  type: 'pipe',
  img_down: toImg('images/flappybird/pipe_down.png'),
  img_up: toImg('images/flappybird/pipe_up.png'),
  w: 70,
  h: canvas.height * .7,
  v_x: -2,
  pass: 0,
  x: x,
  space: (randomInt(80) + 140),
  y: randomInt(canvas.height/2 - 90) + 180,
  pass: 0
})
data.initOnePipe = _initOnePipe

data.objName = {
  player: 1,
  pipe: [2, 3, 4]
}

data.list = [
  {
    ...initData,
    type: 'backImg',
    img: toImg('images/flappybird/bg_day.png'),
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height,
    v_x: -1,
  }, {
    ...initData,
    type: 'bullet',
    img: toImg('images/flappybird/bird1_0.png'),
    img0: toImg('images/flappybird/bird1_0.png'),
    img1: toImg('images/flappybird/bird1_1.png'),
    img2: toImg('images/flappybird/bird1_2.png'),
    imgNum: 0,
    x: 60,
    y: 35,
    w: 48,
    h: 48,
    a_y: .8,

  }, _initOnePipe({x: canvas.width + 10}),
  _initOnePipe({x: canvas.width + 10 + 200}),
  _initOnePipe({x: canvas.width + 10 + 400}), {
    ...initData,
    type: 'gameOver',
    img: toImg('images/flappybird/text_game_over.png'),
    x: canvas.width / 2 - 102,
    y: 300,
    w: 204,
    h: 54,
  }, {
    ...initData,
    type: 'gameStart',
    img: toImg('images/flappybird/tutorial.png'),
    x: canvas.width / 2 - 57,
    y: 300,
    w: 114,
    h: 98,
  }, {
    ...initData,
    type: 'score',
    img: toImg('images/flappybird/tutorial.png'),
    x: canvas.width / 2,
    y: 200,
    h: 44,
    w: 24,
  },
]

data.num = 1


export default data
