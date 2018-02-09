const data = {};

const toImg = src => {
  let img = new Image()
  img.src = src
  return img
}

data.list = [
  {
    type: 'bullet',
    img: toImg('images/bullet.png'),
    x: 20,
    y: 25,
    angle: 0,
    w: 20,
    h: 50,
    v_x: 0,
    v_y: 0,
    a_x: 0,
    a_y: 0,
  }
]

data.num = 1

export default data
