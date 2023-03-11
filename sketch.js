let hour, minute, seconds, milliseconds
let pendulumAngle = 0
let angleChange = 0.5

const SCALE = 1

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
  fill(139, 69, 19)
  ellipse(width / 2, height * 0.2, width * 0.5, width * 0.2)
  rect(width / 2 - (width * 0.5) / 2, height * 0.2, width * 0.5, height * 0.6)
  fill(145, 82, 35)
  rect(width / 2 - (width * 0.6) / 2, height * 0.8, width * 0.6, height * 0.1)
  fill(40)
  rect(width / 2 - (width * 0.35) / 2, height * 0.33, width * 0.35, height * 0.45)
}

function clockFace() {
  fill(0)
  circle(width / 2, height / 3, (width / 3) * 1.1)
  fill(255)
  circle(width / 2, height / 3, width / 3)
  fill(0)
  textSize(width * 0.03)
  textAlign(CENTER, CENTER)
  push()
  translate(width / 2, height / 3)
  const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
  numbers.forEach((number, index) => {
    const angle = index * 30
    text(number, cos(angle) * width * 0.14, sin(angle) * width * 0.14)
  })
  pop()
  push()
  translate(width / 2, height / 3)
  rotate(-90)
  for (num = 0; num <= 60; num++) {
    rect(width * 0.115, -width * 0.0005, width * 0.006, width * 0.001)
    rotate(6)
  }
  pop()
}

function hourHand() {
  const hourWithFraction = hour + minute / 60 + seconds / 3600
  const hourAngle = map(hourWithFraction, 0, 24, -90, 630)
  push()
  translate(width / 2, height / 3)
  rotate(hourAngle)
  fill(0)
  ellipse(width * 0.06, 0, width * 0.12, width * 0.012)
  pop()
}

function minuteHand() {
  const minutesWithFraction = minute + seconds / 60 + milliseconds / 1000 / 60
  const minuteAngle = map(minutesWithFraction, 0, 60, -90, 270)
  push()
  translate(width / 2, height / 3)
  rotate(minuteAngle)
  fill(0)
  ellipse(width * 0.07, 0, width * 0.14, width * 0.008)
  pop()
}

function secondHand() {
  const secondAngle = map(seconds, 0, 60, -90, 270)
  push()
  translate(width / 2, height / 3)
  rotate(secondAngle)
  fill(255, 0, 0, 150)
  ellipse(width * 0.07, 0, width * 0.14, width * 0.002)
  fill(0)
  circle(0, 0, width * 0.015)
  pop()
}

function pendulum() {
  push()
  fill('gold')
  translate(width / 2, height / 3)
  rotate(90 - pendulumAngle)
  rect(0, -width * 0.0025, height * 0.35, width * 0.005)
  circle(height * 0.35, 0, width * 0.07)
  pop()
  if (pendulumAngle >= 12 || pendulumAngle <= -12) angleChange = -angleChange
  pendulumAngle += angleChange
}
