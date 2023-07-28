
const billInput = document.querySelector('.input1')

const custom = document.querySelector('.custom2')

const myNums = document.querySelectorAll('.nums')

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

  

  if(isNaN(people) || people <= 0){
    alert('You forgot to type number of people')
  } else{
    tip.innerHTML = `$${tipNum.toFixed(2)}`

    total.innerHTML = `$${totalNum.toFixed(2)}`
  }

}


peopleInput.addEventListener('input', () => {
  tipAmount(parseFloat(custom.value));
});



myNums.forEach(num => {
  num.addEventListener('click', () => {
    tipAmount(parseFloat(num.textContent));
  });
});


custom.addEventListener('input', () => {
  tipAmount(parseFloat(custom.value))
})

reset.addEventListener('click', () => {
  billInput.value = ''
  peopleInput.value = ''
  custom.value = ''

  tip.innerHTML = `$${backToZero.toFixed(2)}`

  total.innerHTML = `$${backToZero.toFixed(2)}`
})


