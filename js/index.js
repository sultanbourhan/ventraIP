let div1 = document.querySelector(".container .display .buttons div:nth-child(1)")
let div2 = document.querySelector(".container .display .buttons div:nth-child(2)")
let div3 = document.querySelector(".container .display .buttons div:nth-child(3)")
let div4 = document.querySelector(".container .display .buttons div:nth-child(4)")
let div5 = document.querySelector(".container .display .buttons div:nth-child(5)")
let div6 = document.querySelector(".container .display .buttons div:nth-child(6)")
let div7 = document.querySelector(".container .display .buttons div:nth-child(7)")
let div8 = document.querySelector(".container .display .buttons div:nth-child(8)")

let but = document.querySelectorAll(".container .display .buttons div")

let boxs = document.querySelector(".container .display .painting .boxs")

div1.onclick = function () {
    boxs.style = "transform: translateX(0%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div1.classList.add("active")
    })
}

div2.onclick = function () {
    boxs.style = "transform: translateX(-12.5%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div2.classList.add("active")
    })
}

div3.onclick = function () {
    boxs.style = "transform: translateX(-25%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div3.classList.add("active")
    })
}

div4.onclick = function () {
    boxs.style = "transform: translateX(-37.5%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div4.classList.add("active")
    })
}

div5.onclick = function () {
    boxs.style = "transform: translateX(-50%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div5.classList.add("active")
    })
}

div6.onclick = function () {
    boxs.style = "transform: translateX(-62.5%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div6.classList.add("active")
    })
}

div7.onclick = function () {
    boxs.style = "transform: translateX(-75%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div7.classList.add("active")
    })
}

div8.onclick = function () {
    boxs.style = "transform: translateX(-87.5%)"
    but.forEach(bu =>{
        bu.classList.remove("active")
        div8.classList.add("active")
    })
}

// ------------------------------------------------------------


let button = document.querySelector(".container .display .painting .boxs .box:nth-child(8) .flex2 .ssl > button")

let button_p = document.querySelector(".container .display .painting .boxs .box:nth-child(8) .flex2 .ssl > button p")

let div = document.querySelector(".container .display .painting .boxs .box:nth-child(8) .flex2 .ssl div")

let div_but = document.querySelectorAll(".container .display .painting .boxs .box:nth-child(8) .flex2 .ssl div button")


function ssl(){
    div.classList.toggle("none")
    button.classList.toggle("fff")
}

button.onclick = function(){
    ssl()
} 

div_but.forEach(but =>{
    but.onclick = function(){
        button_p.innerHTML = but.innerHTML
        ssl()
    }
})


// ------------------------------------------------------



let slid = document.querySelector(".slider .container .slid")

let transform = 0

setInterval(() => {
    if(transform === -2170){
        transform = 0
    }else{
        transform += -155
        slid.style = `transform: translateX(${transform}px)`
        console.log(transform)
    }
}, 1500);
