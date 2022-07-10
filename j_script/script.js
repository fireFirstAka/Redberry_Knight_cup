'use strict'


//////////////////////////////// objects
const NextButton = document.querySelector('#next_button')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phoneNumber')
const data = document.querySelector('#birthDay')

NextButton.addEventListener('click', function(e){
    e.preventDefault()
    checkInputs();
})

// userName.value = localStorage.name;
// email.value = localStorage.email;
// phoneNumber.value = localStorage.phone;
// data.value = localStorage.data
const checkInputs = function(){
    const userNameValue = userName.value.trim()
    const emailValue= email.value.trim()
    const phoneNumberValue= phoneNumber.value.trim()
    const dataValue = data.value;
    const answers = []
    
    if(2 < userNameValue.length){
     setSucces(userName)
     localStorage.setItem('name',userNameValue)
     answers.push(true)
     arrayRemove(answers,false)
     
    }else{
     setError(userName)
     answers.push(false)
    }
    if(emailValue.slice(-12) === '@redberry.ge'){
        localStorage.setItem('email',emailValue)
         setSucces(email)
         arrayRemove(answers,false)
         answers.push(true)


    }else{
             setError(email)
            answers.push(false)

 
     }
     if(Number(phoneNumberValue.length) < 9 || Number(phoneNumberValue.length) > 9){
         setError(phoneNumber)
         answers.push(false)
     }else{

        localStorage.setItem('phone',phoneNumberValue)
         setSucces(phoneNumber)
         arrayRemove(answers,false)
         answers.push(true)
     }

     if(dataValue !== ""){
        setSucces(data)
        arrayRemove(answers,false)
        answers.push(true)
        localStorage.setItem('data',dataValue)

     }else{
        answers.push(false)
        setError(data)

     }
 
     function arrayRemove(arr, value) { 
     
         return arr.filter(function(ele){ 
             return ele != value; 
         });
     }
     if(answers.every(elem => elem === true)){
        window.location.href ='/input_exp_information.html'

     }
 }
 
 const setSucces = function(input){
    const formContorl = input.parentElement;
    const correct = formContorl.querySelector('img')
    correct.classList.add('correct')
    input.className = 'input_element'
}

const setError = function(input){
    input.classList.add('wrong')
}





