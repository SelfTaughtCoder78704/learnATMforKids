let submitBtn = document.getElementById('sub')
let keyPad = document.querySelectorAll('.inBtn')
let changeMessage = document.getElementById('changeMessage')
let messageBox = document.getElementById('mess')
let req = document.querySelector('.request')
let reset = document.getElementById('reset')
let slot = document.querySelector('.slot')
let bal = document.getElementById('bal')
let dep = document.getElementById('dep')
let wid = document.getElementById('wid')
let cancel  = document.getElementById('cancel')
let masked = document.querySelector('.masked')
let amounts =  document.querySelectorAll('.amount')
let amount = document.querySelector('.amounts')
let withDone = document.getElementById('end')
let twanks = document.querySelectorAll('.twank')


amount.style.display='none'
reset.disabled = true;



let keys = []
let dots = ''
//GET PIN NUMBER FUNCTION
function keyPush(){
  

  for(let i = 0; i < keyPad.length; i++){
    if(keys.length === 0){
      keyPad[i].addEventListener('click', function(){
        keys.push(keyPad[i].textContent)
        dots += '.'
        masked.textContent = dots
        reset.disabled = false;
    })
    }
}
}


//CARD INFO
let card = {
  pin: "0404",
  balance: 400, 
}


// CARD INSIDE
function cardIn(){
  
  let card = document.querySelector('.card')
  changeMessage.textContent = ''
  messageBox.style.display="block"
  messageBox.textContent = "Enter Your PIN"
  card.style.display = 'none'
  slot.style.background="linear-gradient(180deg, black, red,red)"
  keyPush()
  showSubmit()
  return true
}
function allowDrop(ev) {
  ev.preventDefault();
  
}


//CHECK PIN AND SHOW OPTIONS
function showSubmit(){
  submitBtn.addEventListener('click', function(){
    if(keys.join('') == card.pin){
      changeMessage.textContent = "What would you like to do today?"
    
      messageBox.style.display = 'none'
      req.style.display= 'block'
      masked.style.display = 'none'
   
    }else{
      changeMessage.textContent = 'PIN Incorrect!'
    }
  })
}

//RESET ENTERED INFORMATION
reset.addEventListener('click', function() {
dots = ''
  keys = []
  changeMessage.textContent = ''
  document.getElementById('welcome').textContent = 'WELCOME'
  changeMessage.textContent = 'Starting over.'

  
})


//GET BALANCE
bal.addEventListener('click', function(){
  messageBox.textContent = `Your current balance is: $${card.balance}`
  messageBox.style.display = 'block'
})


//MAKE WITHDRAWL
wid.addEventListener('click', function() {
amount.style.display = 'block'
  changeMessage.textContent = 'Choose an amount...'
 
  
})

//MAKE DEPOSIT
dep.addEventListener('click', function() {

})

function cancelTrans(){
  let card = document.querySelector('.card')
  document.getElementById('welcome').textContent = 'GOODBYE'
  changeMessage.textContent = 'Transaction Cancelled...Please take your card'
  slot.style.background = 'black'
  card.style.display='block'
  req.style.display='none'
 
}

//CANCEL TRANSACTION
cancel.addEventListener('click', function() {
 
 cancelTrans()
  setTimeout(()=> {
    location.reload()
  }, 3000)
  
})
function disableAll(){
  for(let i = 0; i < amounts.length; i++){
    amounts[i].disabled = true
  }
}

let total = 0
  for(let i = 0; i < amounts.length; i++){
    
    amounts[i].addEventListener('click', function(sum){
   disableAll()
     sum =Number (this.value)
     total += sum
     card.balance -= total

    })
  }


  withDone.addEventListener('click', function(){
      wid.disabled = true;
      wid.style.color = "grey"
      wid.style.border = 'none'
      amount.style.display = 'none'
      if(total === 20){
        twanks[0].style.display='inline'
      }else if(total === 40){
        twanks[0].style.display='inline'
        twanks[1].style.display='inline'
      } else if(total === 60){
        twanks[0].style.display='inline'
        twanks[1].style.display='inline'
        twanks[2].style.display='inline'
      }else if(total === 80){
        twanks[0].style.display='inline'
        twanks[1].style.display='inline'
        twanks[2].style.display='inline'
        twanks[3].style.display='inline'
      }else if(total === 100){
        twanks[0].style.display='inline'
        twanks[1].style.display='inline'
        twanks[2].style.display='inline'
        twanks[3].style.display='inline'
        twanks[4].style.display='inline'
      }
    
    
 
  })




 
