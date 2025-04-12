// ADDING THE BACK TO TOP BUTTON BEHAVIOR ON SCROLL

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

// ADDING THE BEHAVIOR TO THE TOGGLE BUTTON

let btntoggle = document.getElementById("changeperiod");
let isActive = false;
    btntoggle.onclick = () =>{
        isActive = !isActive;
        btntoggle.classList.toggle("changetoggle", isActive);
    };

// ADDING BEHAVIOR TO THE FIRST HOVER DROPDOWN ON THE PRODUCT LI
    
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

// ADDING BEHAVIOR TO THE SECOND (WORKFLOW) DROPDOWN OF THE PRODUCT LI

let divContent = document.getElementById("content");
let workflowContent = document.getElementById("workflowContent");

divContent.onmouseover = () =>{
    if (workflowContent.className !== "workflowDropDown"){
        workflowContent.classList = ("workflowDropDown");
        workflowContent.style.display = "grid";
    }
    divContent.onmouseleave = () => {
        workflowContent.classList = ("");
        workflowContent.style.display = "none";
    }
    workflowContent.onmouseover = () =>{
        if (workflowContent.className !== "workflowDropDown"){
            workflowContent.classList = ("workflowDropDown");
            workflowContent.style.display = "grid";

            dropContent.classList = ("dropcontent");
            dropContent.style.display = "block";
        }
        workflowContent.onmouseleave = () => {
            if (workflowContent.className == "workflowDropDown"){
                workflowContent.classList = ("");
                workflowContent.style.display = "none";

                dropContent.classList = ("");
                dropContent.style.display = "none";
            }

        }
    };
    
};


// ADDING THE BEHAIOR OF THE FAQs

let questions = document.querySelectorAll(".questions");

    questions.forEach(que => {
        que.onclick = () =>{

            let paragraphs = document.querySelectorAll("#para");
            paragraphs.forEach(para => {
                if(para.style.display == "none"){
                    para.style.display = "block";
                }else{
                    para.style.display = "none";
                }
            })
        };
    });