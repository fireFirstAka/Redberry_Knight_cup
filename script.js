'use strict'
//////////////////////////////// objects

///// dropdown element
const dropdowns = document.querySelectorAll('.dropdown')
const btnNext = document.querySelector('.btn-primary')
const btnBack = document.querySelector('#back_button')
const regCont = document.querySelector('.registration_container')
const regExpCont = document.querySelector('.registration_container_experience')
const inputElem = document.querySelectorAll('.input')


///// input element
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phoneNumber')
const data = document.querySelector('#data')


btnNext.addEventListener('click', function(e){
    e.preventDefault();
    checkInputs()
})



const checkInputs = function(){
   const userNameValue = userName.value.trim()
   const emailValue= email.value.trim()
   const phoneNumberValue= phoneNumber.value.trim()
   const answers = []

   if(5 < userNameValue.length){
    setSucces(userName)
    answers.push(true)
    arrayRemove(answers,false)
    
   }else{
    setError(userName)
    answers.push(false)
   }
   if(emailValue === ''){
    setError(email)
    answers.push(false)
   }
   else if(!isEmail(emailValue)) {
    setError(email)
    answers.push(false)
    }else{
        setSucces(email)
        arrayRemove(answers,false)
        answers.push(true)

    }
    if(Number(phoneNumberValue.length) < 9 || Number(phoneNumberValue.length) > 9){
        setError(phoneNumber)
        answers.push(false)
    }else{
        setSucces(phoneNumber)
        arrayRemove(answers,false)
        answers.push(true)
    }

    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    console.log(answers)
    if(answers.every(elem => elem === true)){
        console.log(true)
        setTimeout(() =>{
            window.location.href ='/experience.html'
        }, 3000);

        new CreateObject(userNameValue, emailValue, phoneNumberValue)
    }else{
        console.log('wrong')
    }
}

//  messages
const setSucces = function(input){
    const formContorl = input.parentElement;
    const correct = formContorl.querySelector('img')
    correct.classList.add('correct')
    input.className = 'input_element'
}

const setError = function(input){
    input.classList.add('wrong')
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




/////////////////// dropdown menu

dropdowns.forEach(function(elem){
    const select = elem.querySelector('.select')
    const arrow = elem.querySelector('.arrow')
    const menu = elem.querySelector('.menu')
    const option = elem.querySelectorAll('.menu li')
    const selected = elem.querySelector('.selected')

    select.addEventListener('click', ()=> {
        menu.classList.toggle('menu-open')
        arrow.classList.toggle('arrow-rotate')
    })

    option.forEach(option =>{
        option.addEventListener('click', function(){
            selected.innerText = option.innerText;
            menu.classList.toggle('menu-open')
            arrow.classList.toggle('arrow-rotate')
        })
    })
})



class CreateObject {
    constructor(name, email , phoneNumber ){
        this.email= email;
        this.phoneNumber = phoneNumber;
        this.name = name;
        console.log(this)
    }
}


