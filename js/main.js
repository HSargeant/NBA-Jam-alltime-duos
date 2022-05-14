const teams = document.querySelectorAll('li')
let arr = Array.from(teams)

arr.forEach(element => element.addEventListener('mouseover', teamPick))
console.log(Array.from(teams))


function teamPick (mouseover){

    if(arr.includes(mouseover.target)){
        document.querySelector('.duoImage').classList.remove('hidden')
        document.querySelector('.duoImage').src=mouseover.target.classList[0]
    }
}