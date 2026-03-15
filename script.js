const startBtn = document.getElementById("startBtn")
const card = document.getElementById("card")

startBtn.onclick = () => {

  startBtn.style.display = "none"
  card.style.display = "block"

  birthday.onClick({
    clientX: window.innerWidth/2,
    clientY: window.innerHeight/3
  })

}
