

let span = document.querySelectorAll(".Information .container > .nav span")

let salid = document.querySelector(".Information .container > .slaider .slaid")


span.forEach(spa=>{
    spa.onclick = function(){
        span.forEach(spa=>{
            spa.classList.remove("active")
        })
        spa.classList.add("active")
        if(spa.getAttribute("data-nam") === "a1"){
            salid.style = `transform: translateX(0)`
        }
        if(spa.getAttribute("data-nam") === "a2"){
            salid.style = `transform: translateX(-33.3%)`
        }
        if(spa.getAttribute("data-nam") === "a3"){
            salid.style = `transform: translateX(-66.6%)`
        }
    }
})