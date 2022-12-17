const mainSect = document.querySelector(".parent-sect")
const sectBtns = document.querySelectorAll(".active-sect")
console.log(sectBtns.length)
const contrlBtns = document.querySelectorAll(".control")
console.log(contrlBtns.length)
const cntrl = document.querySelector(".controls")
console.log(cntrl.length)
const btnAct = document.querySelectorAll(".active")
const progValue = document.querySelectorAll(".done")
//console.log("progVal", progValue.length)
const progWidth = document.querySelectorAll(".prog-bar")
//console.log("progWidth", progWidth.length)


function progress()
{

    for (let i = 0; i < progValue.length; i++)
    {
    let w = 0;
     let interval = 4000
         let p = progWidth[i].getAttribute("data-val")
         let c = progValue[i].innerHTML
         c =0;
        var duration = Math.floor(interval/parseInt(p))
       
        let counter = setInterval(function() {
       
        progWidth[i].style.width = `${w}%`
        w += 1
        c += 1
        progValue[i].innerHTML = `${c}%`
        console.log(w)
        if (w == parseInt(p))
        {
            clearInterval(counter)
        }
            
        }, duration)
    }
}
function navigatePage() {

    for (let i = 0; i < contrlBtns.length; i++)
    {
        contrlBtns[i].addEventListener("click", function()
        {
            for (let i = 0; i < contrlBtns.length; i++)
            {
                contrlBtns[i].classList.remove("active-btn")
               sectBtns[i].style.display ="none"
                btnAct[i].classList.remove("first")
            }
           contrlBtns[i].classList.add("active-btn")
btnAct[i].classList.add("first")
sectBtns[i].style.display = "block"
        })
    }
   /* yes", e => {
      // console.log(e.target)
       const id = e.target.id
        const activeSect = document.getElementById(id)
        console.log(activeSect, id)
        if(activeSect)
        {
        for (let i = 0; i < sectBtns.length; i++)
        {
            sectBtns[i].clas.remove("active-sect")
            
        }
        activeSect.classList.add("active-sect")
        
       
     console.log(activeSect.className)
    }})*/
  
}
navigatePage() 
Progress()
