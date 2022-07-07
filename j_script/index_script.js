const getStartedBtn = document.querySelector('#get_stared_button')

getStartedBtn.addEventListener('click', function(e){
    e.preventDefault();
    setTimeout(() =>{
        window.location.href ='/input_per_information.html'
    }, 1000)

})
