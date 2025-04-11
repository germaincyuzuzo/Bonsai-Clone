let backToTop = document.getElementById("backtotop");

window.onscroll = () =>{

    if(document.documentElement.scrollTop > 50){
        backToTop.setAttribute.class;
        backToTop.className = "scrolltotop";
        backToTop.innerHTML = "Back to top"
    }else{
        backToTop.className = "";
    }

    backToTop.onclick = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

};

let btntoggle = document.getElementById("changeperiod");
let isActive = false;
    btntoggle.onclick = () =>{
        isActive = !isActive;
        btntoggle.classList.toggle("changetoggle", isActive);
    };