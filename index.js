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

let product = document.getElementById("dropdown");
let dropContent = document.getElementById("dropcontent");

product.onmouseover = () =>{
    if (dropContent.className !== "dropcontent"){
        dropContent.classList = ("dropcontent");
        dropContent.style.display = "block";
    }

    product.onmouseleave = () =>{
        if (dropContent.className == "dropcontent"){
            dropContent.classList = ("");
            dropContent.style.display = "none";
        }
    };
};

dropContent.onmouseover = () =>{
    if (dropContent.className !== "dropcontent"){
        dropContent.classList = ("dropcontent");
        dropContent.style.display = "block";
    }

    dropContent.onmouseleave = () =>{
        if (dropContent.className == "dropcontent"){
            dropContent.classList = ("");
            dropContent.style.display = "none";
        }
    };
};