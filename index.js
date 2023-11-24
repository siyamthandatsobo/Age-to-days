let btnAge = document.querySelector('[data-convert]')
let age = document.getElementById('age').value
let display = document.getElementById('result')

btnAge.addEventListener('click', function(){
let age = document.getElementById('age').value
ageToDays(age)
})


function ageToDays(num) {
    let sum = num * 365.25
    display.innerText = sum.toFixed(2) + " days old"
}