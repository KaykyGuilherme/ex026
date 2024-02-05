const placaAll = {
    placa: document.querySelector('.placa'),
    button: document.querySelector('.button'),
    play: document.querySelector('.button__play'),
    buttonBroken: document.querySelector('.button--broken--off'),
    namePlaca: document.querySelector('.name'),
    nameInput: document.querySelector('#nome')
}

placaAll.nameInput.addEventListener('input', ()=>{
    placaAll.namePlaca.textContent = placaAll.nameInput.value
})

placaAll.namePlaca.addEventListener('input', () =>{
    placaAll.nameInput.value = placaAll.namePlaca.textContent
})

placaAll.button.addEventListener('click', ()=>{
    placaAll.placa.classList.add('shack')
    placaAll.button.classList.add('button--broken', 'broken--rigtht')
    placaAll.play.classList.add('button--broken--right')

    placaAll.buttonBroken.classList.remove('button--broken--off')
})