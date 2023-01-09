const button = document.querySelector('.burger');
const menu = document.querySelector('.active')
const burger = document.querySelector('.fa-bars')
const closebar = document.querySelector('.fa-xmark')

button.addEventListener('click', function () {
    burger.classList.toggle('fa-xmark')
    if (burger) {
        menu.classList.toggle('burger_open')
    } 
})

const video = document.getElementsById('video')
const posters = document.getElementsByClassName('mywork__video')
video.addEventListener('ended', function () {
    this.src=posters.poster
})