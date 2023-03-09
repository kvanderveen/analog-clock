let hour, minute, seconds, milliseconds
let pendulumAngle = 0
let angleChange = 0.5

const SCALE = 0.8

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220)
  drawClock()
}

function drawClock() {
  getCurrentTime()
  clockStructure()
  pendulum()
  clockFace()
  hourHand()
  minuteHand()
  secondHand()
}

function getCurrentTime() {
  const time = new Date()
  hour = time.getHours()
  minute = time.getMinutes()
  seconds = time.getSeconds()
  milliseconds = time.getMilliseconds()
}

function clockStructure() {
  fill(145, 82, 35)
  ellipse(width / 2, height * 0.2, width * 0.5 * SCALE, width * 0.2 * SCALE)
  fill(139, 69, 19)
  rect(
    width / 2 - (width * 0.5 * SCALE) / 2,
    height * 0.2,
    width * 0.5 * SCALE,
    height * 0.8 * SCALE
  )
  fill(145, 82, 35)
  rect(
    width / 2 - (width * 0.6 * SCALE) / 2,
    height * 0.8,
    width * 0.6 * SCALE,
    height * 0.1 * SCALE
  )

  fill(40)
  rect(
    width / 2 - (width * 0.35 * SCALE) / 2,
    height * 0.33,
    width * 0.35 * SCALE,
    height * 0.45 * SCALE
  )
}

function clockFace() {
  fill(0)
  circle(width / 2, height / 3, (width / 3) * 1.1 * SCALE)
  fill(255)
  circle(width / 2, height / 3, (width / 3) * SCALE)
  fill(0)
  textSize(width * 0.03 * SCALE)
  const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
  numbers.forEach((number, index) => {
    push()
    const angle = index * 30
    translate(width / 2, height / 3)
    textAlign(CENTER, CENTER)
    text(number, cos(angle) * width * 0.14 * SCALE, sin(angle) * width * 0.14 * SCALE)
    pop()
  })
}

function hourHand() {
  const hourAngle = (hour + minute / 60 + seconds / 3600) * 30 - 90
  push()
  translate(width / 2, height / 3)
  rotate(hourAngle)
  fill(0)
  ellipse(width * 0.06 * SCALE, 0, width * 0.12 * SCALE, width * 0.012 * SCALE)
  pop()
}

function minuteHand() {
  const minuteAngle = (minute + seconds / 60 + milliseconds / 1000 / 60) * 6 - 90
  push()
  translate(width / 2, height / 3)
  rotate(minuteAngle)
  fill(0)
  ellipse(width * 0.07 * SCALE, 0, width * 0.14 * SCALE, width * 0.008 * SCALE)
  pop()
}

function secondHand() {
  const secondAngle = seconds * 6 - 90
  push()
  translate(width / 2, height / 3)
  rotate(secondAngle)
  fill(255, 0, 0, 150)
  ellipse(width * 0.07 * SCALE, 0, width * 0.14 * SCALE, width * 0.002 * SCALE)
  fill(0)
  circle(0, 0, width * 0.015 * SCALE)
  pop()
}

function pendulum() {
  push()
  fill('gold')
  translate(width / 2, height / 3)
  rotate(90 - pendulumAngle)
  rect(0, -width * 0.0025 * SCALE, height * 0.35 * SCALE, width * 0.005 * SCALE)
  circle(height * 0.35 * SCALE, 0, width * 0.07 * SCALE)
  pop()
  if (pendulumAngle >= 10 || pendulumAngle <= -10) angleChange = -angleChange
  pendulumAngle += angleChange
}
