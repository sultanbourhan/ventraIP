

let span = document.querySelectorAll(".buttons .container .flex2 span")

span.forEach(sp =>{
    sp.onclick = function (){
        span.forEach(sp =>{
            sp.classList.remove("active")
        })
        sp.classList.add("active")
        
        if(sp.getAttribute("data-nmb") === "a1"){
            window.scrollTo({
                top:0,
                behavior:"smooth",
            })
        }
        
        if(sp.getAttribute("data-nmb") === "a2"){
            window.scrollTo({
                top:600,
                behavior:"smooth",
            })
        }

        if(sp.getAttribute("data-nmb") === "a3"){
            window.scrollTo({
                top:2600,
                behavior:"smooth",
            })
        }

        if(sp.getAttribute("data-nmb") === "a4"){
            window.scrollTo({
                top:3900,
                behavior:"smooth",
            })
        }
    }
})


let span1 = document.querySelector(".buttons .container .flex2 span:nth-child(1)")
let span2 = document.querySelector(".buttons .container .flex2 span:nth-child(2)")
let span3 = document.querySelector(".buttons .container .flex2 span:nth-child(3)")
let span4 = document.querySelector(".buttons .container .flex2 span:nth-child(4)")






let buttons =document.querySelector(".buttons")

window.onscroll = function(){
    if(scrollY > 580){
        buttons.classList.add("fixed")
    }else{
        buttons.classList.remove("fixed")
    }


    if(scrollY >= 0 && scrollY <= 599){
        span.forEach(sp =>{
            sp.classList.remove("active")
        })
        span1.classList.add("active")
    }

    if(scrollY >= 600 && scrollY <= 2599){
        span.forEach(sp =>{
            sp.classList.remove("active")
        })
        span2.classList.add("active")
    }

    if(scrollY >= 2600 && scrollY < 3899){
        span.forEach(sp =>{
            sp.classList.remove("active")
        })
        span3.classList.add("active")
    }

    if(scrollY >= 3900 ){
        span.forEach(sp =>{
            sp.classList.remove("active")
        })
        span4.classList.add("active")
    }


}


// ---------------------------------------------------------------

let left = document.querySelector(".slider .slid  > span:nth-child(1)")
let right = document.querySelector(".slider .slid  > span:nth-child(2)")

let boxs = document.querySelector(".slider .slid .boxs")

let tran = 0

left.onclick = function(){

    if(tran < 0){
        tran += 270
        boxs.style.transform = `translateX(${tran}px)`
        right.classList.remove("none")
        if(tran === 0){
            left.classList.add("none")
        }
    }
    

}

right.onclick = function(){

    if(tran > -3510){
        tran -= 270
        boxs.style.transform = `translateX(${tran}px)` 
        left.classList.remove("none")
        if(tran === -3510){
            right.classList.add("none")
        }
    }
    
}


// --------------------------------------------------


let t_span = document.querySelectorAll(".table .container .flex1 .flex >span")

let loading = document.querySelector(".table .loading")

t_span.forEach(span =>{
    span.onclick =function(){
        t_span.forEach(span =>{
            span.classList.remove("active")
        })
        span.classList.add("active")
        loading.style.display= "flex"
        setTimeout(() => {
            loading.style.display= "none"
        }, 1000);
    }
})


// -----------------------------------------------------------------



let frequently_div = document.querySelector(".frequently .container > div") 

let frequently_span = document.querySelector(".frequently .container> div >div:nth-child(1) div span:nth-child(1)")

let frequently_none = document.querySelector(".frequently .container> div >div:nth-child(2)")

frequently_div.onclick = function(){
    frequently_span.classList.toggle("s")
    frequently_none.classList.toggle("up")
}



let frequently_div1 = document.querySelector(".frequently .container > div:nth-child(3)") 

let frequently_span1 = document.querySelector(".frequently .container> div:nth-child(3) >div:nth-child(1) div span:nth-child(1)")

let frequently_none1 = document.querySelector(".frequently .container> div:nth-child(3) >div:nth-child(2)")

frequently_div1.onclick = function(){
    frequently_span1.classList.toggle("s")
    frequently_none1.classList.toggle("up")
}


let frequently_div2 = document.querySelector(".frequently .container > div:nth-child(4)") 

let frequently_span2 = document.querySelector(".frequently .container> div:nth-child(4) >div:nth-child(1) div span:nth-child(1)")

let frequently_none2 = document.querySelector(".frequently .container> div:nth-child(4) >div:nth-child(2)")

frequently_div2.onclick = function(){
    frequently_span2.classList.toggle("s")
    frequently_none2.classList.toggle("up")
}
