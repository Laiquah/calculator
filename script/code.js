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
    // let inputArray = result.value.split('');
    // console.log(inputArray)
    // if(inputArray[inputArray.length-1] === ''){
    //     return;
    // } else {
    //     result.value += e.target.innerHTML;
    //     checkerArray = [];
    // }
}

document.querySelector("#backspace").
addEventListener('click', ()=> {
    let output = result.value;
    result.value = output.slice(0, -1);
}
)

function clear(){
    result.value = "";
    checkerArray = [];
}

document.querySelector('#clear')
.addEventListener('click', ()=>{
    clear()
})

document.querySelector('#division')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '/'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

document.querySelector('#multiply')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '*'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

document.querySelector('#addition')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '+'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

document.querySelector('#subtraction')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '-'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

document.querySelector('#equal')
.addEventListener('click', (e)=>{
    // result.value = eval(result.value).toFixed(2);
    let calculationResult = eval(result.value)

    result.value = calculationResult.toFixed(2);
})
