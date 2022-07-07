let gameBoard=document.querySelector('.gameBoard')
let score=document.getElementById('score')
let paragrafo=document.querySelector('.paragrafo')
let pontos=0
let velocity=10
let time=100

const aviao=document.querySelector('.alvo')
const aviaoPosition=aviao.offsetLeft
aviao.style.animation='none'

/*-------------START WORLD----------------*/
let sectionWorld=document.querySelector('.world')
let divStart=document.querySelector('.divStart')
let clock=document.getElementById('time')

function start(){
    paragrafo.style.color='black'
    time=100
    pontos=0
    score.innerText=`SCORE:${pontos}`
    divStart.style.display="none"
    setTimeout(()=> {
        aviao.style.animation=`run ${velocity}s infinite linear`
    },1000)
    
    clock.innerText=`TIME:${time}`
    const loop = setInterval(() => {
        time-=1
        clock.innerText=`TIME:${time}`
        if(time==0){
            clearInterval(loop)
        }else if(time<=10){
            clock.style.color='#cc0505'
        }
    },1000)
    const timeLoop=setInterval(()=>{
        if(time==0){
            divStart.style.display="FLEX"
            aviao.style.animation='none'
            pontos=0
            velocity=10
        clearInterval(timeLoop)
        }
    },1000)
}

function play(){
    divStart.style.display='none'
    sectionWorld.style.display='flex'
}

function city(){
    gameBoard.style.backgroundImage='url(imagens/fundo-cidadex.png) no-repeat center bottom'
    sectionWorld.style.display='none'
    aviao.src='./imagens/aviao.png'
    paragrafo.style.color='black'
    clock.style.color='black'
}

function lago(){
    gameBoard.style.backgroundImage='url(imagens/fundo-lagox.png)'
    sectionWorld.style.display='none'
    aviao.src='./imagens/teco-teco.png'
    paragrafo.style.color='black'
    clock.style.color='black'
}

function espaco(){
    clock.style.color='white'
    gameBoard.style.backgroundImage='url(imagens/fundo-espaco.jpg)'
    sectionWorld.style.display='none'
    aviao.src='./imagens/foguete.png'
    paragrafo.style.color='white'
    
    
}
/*--------------------------------------------------*/

let bonusTime=document.getElementById('bonusTime')
let bonusSpeed=document.getElementById('bonusSpeed')

function bonusTimes(){
    time+=50
    bonusTime.style.display='none'
    bonusSpeed.style.display='none'
}
function bonusSpeeds(){
    velocity+=5
    bonusTime.style.display='none'
    bonusSpeed.style.display='none'
}
function acertou(){
    if(pontos % 2 == 0){
        aviao.style.bottom='40%'
    }else if(pontos % 3 == 0){
        aviao.style.bottom='20%'
    }else(
        aviao.style.bottom='70%'
    )
    if(velocity>1){
        velocity=velocity-1
    }else{
        velocity=1
    }
    
    if(pontos>9 && pontos % 10 == 0){
        bonusTime.style.animation='bonus 5s'
        bonusSpeed.style.animation='bonus 5s'
        bonusTime.style.display='block'
        bonusSpeed.style.display='block'
        setTimeout(()=>{
            
            bonusTime.style.animation='none'
            bonusSpeed.style.animation='none'
        },3000)
    }

    aviao.style.animation='none'
    setTimeout(()=> {
        aviao.style.animation=`run ${velocity}s infinite linear`
    },1000)
    pontos+=1
    score.innerText=`SCORE:${pontos}`
}



        
