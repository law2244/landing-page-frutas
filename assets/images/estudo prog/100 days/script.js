let menu = document.querySelector(".divs")

menu.addEventListener("click" , () => {
    if(menu.getAttribute("class") == "divs"){
        menu.classList.add("divs")
        menu.classList.remove("divsActive")
        return
    } else{
        menu.classList.add("divs")
        menu.classList.remove("divsActive")
        return
    }
})
   
