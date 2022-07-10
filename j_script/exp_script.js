

///// dropdown element
const dropdowns = document.querySelectorAll('.dropdown')
const FinishButton = document.querySelector('#Finish_button')
const btnBack = document.querySelector('#back_button')
const regCont = document.querySelector('.registration_container')
const regExpCont = document.querySelector('.registration_container_experience')
const inputElem = document.querySelectorAll('.input')

const knowledge = document.querySelector('.knowledge')

const caracter = document.querySelector('.caracter-name')


const UserObject = {

}

UserObject.name = localStorage.name
UserObject.date_of_birth = transformData(localStorage.data)
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
            selected.innerText = option.innerText;
            UserObject.character_id = +option.firstElementChild.firstElementChild.id
            menu.classList.toggle('menu-open')
            arrow.classList.toggle('arrow-rotate')
        })
    })
    level.forEach(option =>{
        option.addEventListener('click', function(){
            knowledge.innerText = option.innerText;
            UserObject.experience_level = knowledge.innerText.toLowerCase()
            menu.classList.toggle('menu-open')
            arrow.classList.toggle('arrow-rotate')

        })
    })

    
})

const characters = document.querySelectorAll('.character')

const getCharacter = async() =>{
    const data =  await fetch('https://chess-tournament-api.devtest.ge/api/grandmasters').then(_=>_.json());
    characters.forEach(function(elem,i){
        let image = data[i].image
        elem.innerHTML = `<li class="character"> ${data[i].name} <img src="https://chess-tournament-api.devtest.ge/${image}"id ="${data[i].id}"></li>`;
    });   
}

getCharacter()


const checkRadio = function(){
    let radio = document.querySelector('input[name="radio"]:checked');
    let cont = document.querySelector('.raddio_input')
    if(radio){
        UserObject.already_participated = radio.value === 'True' ? true : false
        cont.classList.remove('wrong')
        return true
    }else{
        cont.classList.add('wrong')

        // alert("Have you participated in the Redberry Championship?")
        return false
    }
    
    
}


FinishButton.addEventListener('click',async function(e){
    e.preventDefault()
    if(knowledge.innerText === 'level of knowledge *'){
        knowledge.classList.add('wrong')
        
    }else{
        knowledge.classList.remove('wrong')
    }
    var ischecked = checkRadio();
    
    if(caracter.innerText === 'Choose your character *'){
        caracter.classList.add('wrong')
        
    }else{
        caracter.classList.remove('wrong')
    }
    
    if(!ischecked || knowledge.innerText === 'level of knowledge *' || caracter.innerText === 'Choose your character *') return

    request('https://chess-tournament-api.devtest.ge/api/register', 'post', UserObject, { 
    headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
                 },

} ).then(data => {
    // todo navigate to onboarding page 
    window.location.href ='/onboarding_completed.html'
}).catch(error => alert(error.errors?.map(elem => elem.msg)) );








    // localStorage.clear()
    
console.log(UserObject)

})

export function request(url, method, data = null, options = {}) {
    const opts = {
      method,
      ...options,
    };
  
    if (data) {
      opts.body = JSON.stringify(data);
    }
  
    return new Promise((res, rej) => {
      fetch(url, opts)
        .then(response => res(JSON.stringify(response)))
        // .then(data => {
        //   res(data);
        // })
        .catch(err => {
          rej(err);
        });
    });
  }

btnBack.addEventListener('click',function(){
    window.location.href ='/input_per_information.html'
})

function transformData(elem){
    const data = elem.split('-')
    const updateddate = [data[1],data[2],data[0]].join('/')
    return updateddate

}

