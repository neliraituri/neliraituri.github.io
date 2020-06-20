const select1 = document.querySelector('#card1')
select1.addEventListener('click', function () {
  select1.classList.toggle('is-flipped')
})

const select2 = document.querySelector('#card2')
select2.addEventListener('click', function () {
  select2.classList.toggle('is-flipped')
})

const select3 = document.querySelector('#card3')
select3.addEventListener('click', function () {
  select3.classList.toggle('is-flipped')
})

const video = document.querySelector('#bubu')

const select4 = document.querySelector('#card4')
select4.addEventListener('click', function () {
  select4.classList.toggle('is-flipped')
  setTimeout(() => {
    video.style.display = 'flex'
    video.requestFullscreen()
    video.play()
  }, 2500)

  console.log("That's the last of them!")
})

allCards = [
  select1.className,
  select2.className,
  select3.className,
  select4.className,
]
