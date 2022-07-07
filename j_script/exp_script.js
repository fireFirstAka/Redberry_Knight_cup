

///// dropdown element
const dropdowns = document.querySelectorAll('.dropdown')
const FinishButton = document.querySelector('#Finish_button')
const btnBack = document.querySelector('#back_button')
const regCont = document.querySelector('.registration_container')
const regExpCont = document.querySelector('.registration_container_experience')
const inputElem = document.querySelectorAll('.input')



// class CreateUserObject {
//     constructor(Username, email,birthDay, phoneNumber, experience,character){
//         this.name = Username;
//         this.email= email;
//         this.date_of_birth = birthDay;
//         this.phone = phoneNumber;
//         this.experience_level = experience;
//         this.character_id = character
//     }
       


// }

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
            UserObject.character = option.innerText
            selected.innerText = option.innerText;
            menu.classList.toggle('menu-open')
            arrow.classList.toggle('arrow-rotate')

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
const characters = document.querySelectorAll('.character')


const getCharacter = async() =>{

    const data =  await fetch('https://chess-tournament-api.devtest.ge/api/grandmasters').then(_=>_.json());
    characters.forEach(function(elem,i){
        let id = data[i].id
        let image = data[id-1].image
 
        elem.innerHTML = `<li class="character"> ${data[id-1].name} <img src="https://chess-tournament-api.devtest.ge/${image}"id ="${data.id}alt=""></li>`;
    });   
}
getCharacter()

FinishButton.addEventListener('click',function(e){
    e.preventDefault()
    console.log(UserObject)

})

btnBack.addEventListener('click',function(){
    window.location.href ='/input_per_information.html'
})