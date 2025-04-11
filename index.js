let backToTop = document.getElementById("backtotop");
let btntoggle = document.getElementById("changeperiod");

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

    btntoggle.onclick = () =>{
        if (btntoggle.className = "changetoggle"){
            btntoggle.onclick = () =>{
                btntoggle.className = "";
                btntoggle.removeAttribute.class;
            }
            }else{
                btntoggle.className = "changetoggle";
        };
    };