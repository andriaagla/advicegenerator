const adviceID = document.querySelector("#adviceID")
const advicetext = document.querySelector("#adviceText")
const btn= document.querySelector("#btn")

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=> {
        return res.json()
    })
    .then(data=>{
        const adviceIDD=data.slip.id;
        const advice=data.slip.advice;
        adviceID.textContent=adviceIDD;
        advicetext.innerHTML=`<p> ${advice} </p>`
    })
    .catch(err=>{
       console.log(err); 
    })
    
}
window.onload=()=>{
    getAdvice();
}