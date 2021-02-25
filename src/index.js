import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
const log = (code) => {
  console.log(code)
}

const toggle = document.getElementById('menu3')

toggle.addEventListener('click', appearMenu)

var statusAppearMenu = 'close'
function appearMenu(){
  let elem = document.getElementById('text')
  if (statusAppearMenu === 'close'){
    elem.style.top = '-1rem'
    elem.style.transition = 'all .3s ease-in-out'
    statusAppearMenu = 'open'

  }
  else{
    elem.style.top = '-6rem';
    statusAppearMenu = 'close'
  }
}


document.getElementById('toggleButton').addEventListener('click', paragraphToggle)
var status = 'close'
function paragraphToggle() {
  log('we entered the paragraphToggle')
  const elem = document.getElementById('paragraph')
  if (status === 'close'){
    elem.style.opacity = '1'
    elem.style.marginTop = '20px'
    elem.style.marginRight = 'auto'
    elem.style.marginBottom = '100px'
    elem.style.marginLeft = 'auto'
    elem.style.transition = 'all .3s ease-in-out'
    status = 'open'
  }
  else{
    elem.style.opacity = '0'
    elem.style.marginTop = '0'
    elem.style.marginRight = 'auto'
    elem.style.marginBottom = '0'
    elem.style.marginLeft = 'auto'
    status = 'close'
  }
}