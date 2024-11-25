const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animateBgs = document.querySelectorAll('.animated-bg')
const animatedBgText =  document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData () {
    header.innerHTML = '<img src = "https://www.virgilio.it/motori/wp-content/uploads/sites/4/2023/11/nuova-Ford-Mustang-GT-California-Special-.jpg" alt = "" />'
    title.innerHTML = 'Ford Mustang'
    excerpt.innerHTML = '$200.000.000,00'
    profileImg.innerHTML = '<img src = "https://github.com/fluidicon.png" alt = "" />'
    name.innerHTML = 'Alan Aguilar'
    date.innerHTML = 'Sep 30, 2024'

    animateBgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animatedBgText.forEach((bg) => bg.classList.remove('animated-bg-text'))
}