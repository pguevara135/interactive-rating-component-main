let botao = document.querySelectorAll('.numbers button')
let thanks = document.querySelector('.thanks')
let rate = 0

for(let i = 0; i < botao.length; i += 1) {
    botao[i].addEventListener('click', function(){
        clearActive()
        botao[i].classList.add('active')
        rate = i + 1
    })
}

submit.onclick = function() {
    if (rate == 0) {
        alert('Select a rate')
    } else {
        thanks.classList.add('active')
        rated.innerText = rate
    }
    
}

function clearActive() {
    for(let i = 0; i < botao.length; i += 1) {
        botao[i].classList.remove('active');
    }
}
