


let menu = document.querySelector("header .container .flex >div >div:nth-child(3) .menu")

let none = document.querySelector("header .container .flex >div >div:nth-child(3) .none")

let icon = document.querySelector("header .container .flex >div >div:nth-child(3) .menu span")


console.log(menu)

menu.onclick = function(){
    if(icon.innerHTML === "menu"){
        none.style.display= "flex"
        icon.innerHTML = "close"
    }else{
        none.style.display= "none"
        icon.innerHTML = "menu"
    }
}