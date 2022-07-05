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

let currentPage = 0;


btnNext.addEventListener('click', function(e){
    e.preventDefault();
    checkInputs()
})

btnBack.addEventListener('click', function(){
    if(currentPage === 1){
        regCont.classList.remove('hidden')
        regExpCont.classList.add('hidden')
        currentPage = 0;

    }

})



const checkInputs = function(){
   const userNameValue = userName.value.trim()
   const emailValue= email.value.trim()
   const phoneNumberValue= phoneNumber.value.trim()


   if(5 < userNameValue.length){
    setSucces(userName)
   }else{
    setError(userName)
   }
//    if(emailValue === ''){
//     setError(email)
// //    }
// // //    else if(!isEmail(emailValue)) {
// // //     setErrorFor(email)
//     }else{
//         setSucces(email)

//     }
    // if(Number(phoneNumberValue.length) < 9 || Number(phoneNumberValue.length) > 9){
    //     setError(phoneNumber)
    // }else{
    //     setSucces(phoneNumber)
    // }

    const answers = [userName.classList.contains('wrong'),email.classList.contains('wrong'),phoneNumber.classList.contains('wrong')]
    if(answers.some(elem => elem === true)){
        
    }else{
        if(currentPage === 1){
            window.open('/lastPage.html')
        }
        currentPage = 1;
        setTimeout(() =>{
            nextPage()
        }, 1000);
        // new CreateObject(userNameValue, emailValue, phoneNumberValue)
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




// /////////////////// dropdown menu

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

const nextPage = function(){
    console.log(currentPage)
    if(currentPage === 1){
        regCont.classList.add('hidden')
        regExpCont.classList.remove('hidden')
    }
    else{
        regCont.classList.remove('hidden')
        regExpCont.classList.add('hidden')
    }
}



class CreateObject {
    constructor(name, email , phoneNumber ){
        this.email= email;
        this.phoneNumber = phoneNumber;
        this.name = name;
        console.log(this)
    }
}



const OpenLastPage = function(){

}

