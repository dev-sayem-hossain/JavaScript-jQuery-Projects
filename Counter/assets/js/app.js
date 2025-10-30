const incrementBtn = document.querySelector('.counter .increment');
const counterInput = document.querySelector('.counter input');
const decrementBtn = document.querySelector('.counter .decrement');

function incrementNumber(){
   counterInput.value = Number(counterInput.value) + 1 ;
}

function decrementNumber(){
    if(counterInput.value > 1){
    counterInput.value = Number(counterInput.value) - 1 ;
    }
}

function reserNumber(){
    if(counterInput.value <= 0){
        counterInput.value = 1;
    }
}

incrementBtn.addEventListener('click', incrementNumber);
decrementBtn.addEventListener('click', decrementNumber);
counterInput.addEventListener('keyup', reserNumber)



