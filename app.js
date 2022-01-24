let para = document.getElementById('para');
let input = document.getElementById('input')
const timer = document.getElementById('timer') 
const start = document.getElementById('start') 

input.addEventListener('input', ()=>{
    const charSpan = para.querySelectorAll('span');
    console.log(charSpan)
    const inputValue = input.value.split('')

    charSpan.forEach((char,index) =>{
        const word = inputValue[index];
        if(word == null){
            char.classList.remove('correct')
            char.classList.remove('incorect')
        }else if(word === char.innerText){
             char.classList.add('correct')
             char.classList.remove('incorect')
        }else{
            char.classList.add('incorect')
             char.classList.remove('correct')
        }
    })
})



function paraContent(){
    return fetch('./cont.json')
    .then(response => response.json())
    .then(data => data.content)
}

async function makingPara(){
    const cont = await paraContent();
    para.innerHTML = '';
    cont.split('').forEach(element => {
       const span = document.createElement('span')
       span.innerText = element;
       para.appendChild(span)
    });

    input.value = null

    setTimeout(()=>{
        setTimer()
        start.style.opacity = 0
    },4000)
}


let clock
function setTimer(){
    timer.innerText = 0
    clock = new Date();
    setInterval(()=>{
        timer.innerText =  getTimer()
    },1000)
}

function getTimer(){
    return Math.floor((new Date() - clock) / 1000);
}

makingPara()
