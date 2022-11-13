var tabs = document.getElementsByClassName("tab");
var conts = document.getElementsByClassName("tab-co");
console.log(conts);
console.log(conts.length);

var g = [2, 4, 8, 9]

function open(){
    for (tab of g)
    {
    console.log("Hello")
    }
    }
        //tab.classList.remove("active-tab");
  //  }
   // for (var cont of conts)
   // {
    //
        //cont.classList.remove("active-cont");
   // }
    //console.log(event.currentTarget)
    //event.currentTarget.classList.add("active-tab");
    //document.getElementById(name).classList.add("active-cont")
//}
//open(name);

function display(str)
{
for(tab of tabs)
{
   tab.classList.remove("active-tab")
    //console.log(a.innerHTML)
}

for (cont of conts)
{
    cont.classList.remove("active-cont")
}
event.currentTarget.classList.add("active-tab")

document.getElementById(str).classList.add("active-cont")
    //console.log("Hello world")
}

function disp(){
let h = document.getElementById("g")
    h.style.display = "block"
}

function hide(){
    let h= document.getElementById("g")
    
    h.style.display = "none";
}