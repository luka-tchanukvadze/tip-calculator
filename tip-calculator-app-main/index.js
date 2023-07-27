
const billInput = document.querySelector('.input1')

const percent5 = document.querySelector('.num5')
const percent10 = document.querySelector('.num10')
const percent15 = document.querySelector('.num15')
const percent25 = document.querySelector('.num25')
const percent50 = document.querySelector('.num50')
const custom = document.querySelector('.custom2')

const percentArray = [percent5, percent10, percent15, percent25, percent50]

const peopleInput = document.querySelector('.input2')

const tip = document.querySelector('.final1')
const total = document.querySelector('.final2')

const reset = document.querySelector('.reset')

let tipNum = 0
let totalNum = 0

const backToZero = 0


function tipAmount(percent){
  
  let people = Number(peopleInput.value)
  let amount = Number(billInput.value)

  let myPercent = (amount / 100) * percent

  let tip1 = myPercent / people

  tipNum = tip1


  totalNum = (myPercent + amount) / people

  

  if(isNaN(people)|| people <= 0){
    alert('You forgot to type number of people')
  } else{
    tip.innerHTML = `$${tipNum.toFixed(2)}`

    total.innerHTML = `$${totalNum.toFixed(2)}`
  }

}

peopleInput.addEventListener('input', () => {
  tipAmount(parseFloat(custom.value));
});

percent5.addEventListener('click', () => {
  tipAmount(5)
})

percent10.addEventListener('click', () => {
  tipAmount(10)
})

percent15.addEventListener('click', () => {
  tipAmount(15)
})

percent25.addEventListener('click', () => {
  tipAmount(25)
})

percent50.addEventListener('click', () => {
  tipAmount(50)
})

custom.addEventListener('input', () => {
  tipAmount(parseFloat(custom.value))
})

reset.addEventListener('click', () => {
  tip.innerHTML = `$${backToZero.toFixed(2)}`

  total.innerHTML = `$${backToZero.toFixed(2)}`
})


