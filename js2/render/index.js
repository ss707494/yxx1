
const render = (ctx, {list}) => {
  list.map(({type, ...data}) => {
    __render[type](ctx, data)
  })
}

const __render = {
  bullet: (ctx, data) => {
    const {img, x, y, w = 20, h = 50, angle = 40} = data
    //console.log(data);
    ctx.save()
    ctx.translate(x + w / 2,  y + h / 2)
    ctx.rotate(angle * Math.PI / 180)
    ctx.drawImage(img, - w / 2, - h / 2, w, h)
    ctx.restore()
  }
}

export default render
