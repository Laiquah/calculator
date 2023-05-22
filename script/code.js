let result = document.querySelector('#output');
let checkerArray = [];

function display(value){
    if(value == '.' && checkerArray.includes('.')){
        return
    } else if(value == '+' || value == '-' || value == '*' || value == '/'){
        
    } else {
        result.value += value;
        checkerArray.push(value);
    }
}

document.querySelector("#backspace").
addEventListener('click', ()=> {
    let output = result.value;
    result.value = output.slice(0, -1);
}
)

function clear(){
    result.value = "";
}

document.querySelector('#clear')
.addEventListener('click', ()=>{
    clear()
})

document.querySelector('#division')
.addEventListener('click', (e)=>{
    result.value += e.target.innerHTML;
    checkerArray = [];
})

document.querySelector('#multiply')
.addEventListener('click', (e)=>{
    result.value += e.target.innerHTML;
    checkerArray = [];
})

document.querySelector('#addition')
.addEventListener('click', (e)=>{
    result.value += e.target.innerHTML;
    checkerArray = [];
})

document.querySelector('#subtraction')
.addEventListener('click', (e)=>{
    result.value += e.target.innerHTML;
    checkerArray = [];
})

document.querySelector('#equal')
.addEventListener('click', ()=>{
    // console.log(eval(result.value))

    result.value = eval(result.value);
})
