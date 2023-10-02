

let div1 = document.querySelectorAll(".fadeincontent .container >div >div")


div1.forEach(div =>{
    div.onclick = function(){
        div1.forEach(div=>{
            div.classList.remove("js")
        })
        div.classList.add("js")
    }
})




let div2 = document.querySelectorAll(".fadeincontent1 .container >div >div")


div2.forEach(div =>{
    div.onclick = function(){
        div2.forEach(div=>{
            div.classList.remove("js")
        })
        div.classList.add("js")
    }
})




let div3 = document.querySelectorAll(".fadeincontent2 .container >div >div")


div3.forEach(div =>{
    div.onclick = function(){
        div3.forEach(div=>{
            div.classList.remove("js")
        })
        div.classList.add("js")
    }
})