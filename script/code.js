let result = document.querySelector('#output');

function display(value){
    result.value
    += value;
}

result = display(value).innerText

document.querySelector('#backspace')
addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})
