export default function Animation() {
  const canvas = document.getElementById('canvas1')

  const ctx = canvas.getContext('2d', { willReadFrequently: true })

  ctx.fillRect(100, 100, 10, 10)

  //canvas.width = window.innerWidth
  //canvas.height = this.window.innerHeight

  canvas.width = 800 //600
  canvas.height = 550

  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect
      this.x = 0
      this.y = Math.random() * this.effect.height
      this.originX = Math.floor(x)
      this.originY = Math.floor(y)
      this.color = color
      this.size = this.effect.gap - 1
      this.vx = 0 // velocity x -> horizontal speed, 1 -> 1px per animation frame
      this.vy = 0
      this.ease = 0.3
      this.friction = 0.8
      this.dx = 0
      this.dy = 0
      this.distance = 0
      this.force = 0
      this.angle = 0
    }

    draw(context) {
      context.fillStyle = this.color
      context.fillRect(this.x, this.y, this.size, this.size)
    }
    update() {
      this.dx = this.effect.mouse.x - this.x
      this.dy = this.effect.mouse.y - this.y
      this.distance = this.dx * this.dx + this.dy * this.dy
      this.force = -this.effect.mouse.radius / this.distance

      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx)
        this.vx += this.force * Math.cos(this.angle)
        this.vy += this.force * Math.sin(this.angle)
      }
      this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease
      this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
    }
    warp() {
      this.x = Math.random() * this.effect.width
      this.y = Math.random() * this.effect.height
      this.ease = 0.05 // 0.05 how fast or how slow the image assembles itself
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width
      this.height = height
      this.particlesArray = []
      this.image = document.getElementById('image1')
      this.centerX = this.width * 0.5
      this.centerY = this.height * 0.5
      this.x = this.centerX - this.image.width * 0.5
      this.y = this.centerY - this.image.height * 0.5
      this.gap = 4

      this.mouse = {
        radius: 3000, // the area around the cursor where particles react the mouse
        x: undefined,
        y: undefined,
      }
      window.addEventListener('mousemove', (event) => {
        this.mouse.x = event.x - canvas.getBoundingClientRect().left
        this.mouse.y = event.y - canvas.getBoundingClientRect().top
      })
    }
    init(context) {
      //   for (let i = 0; i < 100; i++) {
      //     this.particlesArray.push(new Particle(this));
      //   }

      context.drawImage(this.image, this.x, this.y)
      const pixels = context.getImageData(0, 0, this.width, this.height).data
      for (let y = 0; y < this.height; y += this.gap) {
        for (let x = 0; x < this.width; x += this.gap) {
          const index = (y * this.width + x) * 4
          const red = pixels[index]
          const green = pixels[index + 1]
          const blue = pixels[index + 2]
          const alpha = pixels[index + 3]
          const color = 'rgb(' + red + ',' + green + ',' + blue + ')'

          if (alpha > 0) {
            this.particlesArray.push(new Particle(this, x, y, color))
          }
        }
      }
    }
    draw(context) {
      this.particlesArray.forEach((particle) => particle.draw(context))
    }
    update() {
      this.particlesArray.forEach((particle) => particle.update())
    }
    warp() {
      this.particlesArray.forEach((particle) => particle.warp())
    }
  }

  const effect = new Effect(canvas.width, canvas.height)
  effect.init(ctx)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.draw(ctx)
    effect.update()
    requestAnimationFrame(animate)
  }
  animate()
  effect.warp()
  //   ctx.fillRect(120, 150, 100, 200); // x and y position, width and height of rectangle
  //   ctx.drawImage(image1, 100, 100, 400, 300); // image, x, y, width, height

  // warp button
  // const warpButton = document.getElementById('warpButton')
  // warpButton.addEventListener('click', function () {
  //   effect.warp()
  // })
}
