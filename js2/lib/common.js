
const f_log = data => {
  console.log(data);
  return data
}

const randomInt = num => ~~(Math.random() * num)

const toImg = src => {
  let img = new Image()
  img.src = src
  return img
}

export default {
  f_log,
  randomInt,
  toImg,
}

