const teams = document.querySelectorAll('li')
let arr = Array.from(teams)

arr.forEach(element => element.addEventListener('mouseover', teamPick))

function teamPick (mouseover){

    if(arr.includes(mouseover.target)){
        document.querySelector('.duoImage').classList.remove('hidden')
        document.querySelector('.duoImage').src=mouseover.target.classList[0]
    }
}
const pauseBtn = '<svg width="40px" height="40px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 18.4V5.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6zM14 18.4V5.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6z" stroke="#000000" stroke-width="2"></path></svg>'

const playBtn = '<svg width="40px" height="40px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

const yourAudio = document.getElementById('jamTheme')
const ctrl = document.getElementById('audioControl')
ctrl.addEventListener('click',()=>{

const pause = ctrl.innerHTML === pauseBtn
  ctrl.innerHTML = pause ? playBtn : pauseBtn

  // Update the Audio
  const method = pause ? 'pause' : 'play'
  yourAudio[method]()

  // Prevent Default Action
  return false

})

// ctrl.onclick = function () {
 
  
// };