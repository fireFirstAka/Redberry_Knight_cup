

///// dropdown element
const dropdowns = document.querySelectorAll('.dropdown')
const FinishButton = document.querySelector('#Finish_button')
const btnBack = document.querySelector('#back_button')
const regCont = document.querySelector('.registration_container')
const regExpCont = document.querySelector('.registration_container_experience')
const inputElem = document.querySelectorAll('.input')



const UserObject = {

}

UserObject.name = localStorage.name
UserObject.data_of_birth = localStorage.data
UserObject.phone = localStorage.phone
UserObject.email = localStorage.email

dropdowns.forEach(function(elem){
    const select = elem.querySelector('.select')
    const arrow = elem.querySelector('.arrow')
    const menu = elem.querySelector('.menu')
    const character = elem.querySelectorAll('.character')
    const level = elem.querySelectorAll('.level li')
    const selected = elem.querySelector('.selected')
    const knowledge = elem.querySelector('.knowledge')

    select.addEventListener('click', ()=> {
        menu.classList.toggle('menu-open')
        arrow.classList.toggle('arrow-rotate')

    })

    character.forEach(option =>{
        option.addEventListener('click', function(){
 
            // UserObject.character_id = option
            selected.innerText = option.innerText;
            menu.classList.toggle('menu-open')
            arrow.classList.toggle('arrow-rotate')
            console.log(option.id )
        })
    })
    level.forEach(option =>{
        option.addEventListener('click', function(){
            knowledge.innerText = option.innerText;
            UserObject.experience_level = knowledge.innerText
            menu.classList.toggle('menu-open')
            arrow.classList.toggle('arrow-rotate')

        })
    })

    
})
getCharacter()
const characters = document.querySelectorAll('.character')
const getCharacter = async() =>{
    const data =  await fetch('https://chess-tournament-api.devtest.ge/api/grandmasters').then(_=>_.json());
    characters.forEach(function(elem,i){
        let id = data[i].id
        let image = data[id-1].image
        elem.innerHTML = `<li class="character"> ${data[id-1].name} <img src="https://chess-tournament-api.devtest.ge/${image}"id ="${data[i].id}"></li>`;
    });   
}



const checkRadio = function(){
    let radio = document.querySelector('input[name="radio"]:checked');
    console.log(radio.value)

    if(radio.value === 'true'){
        UserObject.already_participated = true;


    }else if(radio.value === 'false'){
        UserObject.already_participated = false;
    }else{

    }

}





FinishButton.addEventListener('click',function(e){
    e.preventDefault()
    checkRadio()
    // localStorage.clear()

})

btnBack.addEventListener('click',function(){
    window.location.href ='/input_per_information.html'
})

