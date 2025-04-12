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

// QUESTION 1
let question1 = document.getElementById("question1");

    question1.onclick = () =>{

        let para = document.getElementById("para1");
            if(para.style.display == "none"){
                para.style.display = "block";
            }else{
                para.style.display = "none";
            }
    };

// QUESTION 2
let question2 = document.getElementById("question2");

    question2.onclick = () =>{

        let para = document.getElementById("para2");
            if(para.style.display == "none"){
                para.style.display = "block";
            }else{
                para.style.display = "none";
            }
    };

// QUESTION 3
let question3 = document.getElementById("question3");

    question3.onclick = () =>{

        let para = document.getElementById("para3");
            if(para.style.display == "none"){
                para.style.display = "block";
            }else{
                para.style.display = "none";
            }
    };

// QUESTION 4
let question4 = document.getElementById("question4");

    question4.onclick = () =>{

        let para = document.getElementById("para4");
            if(para.style.display == "none"){
                para.style.display = "block";
            }else{
                para.style.display = "none";
            }
    };

// TEMPLATE DROPDOWN

let template = document.getElementById("tempdropdown");
let tempcontent = document.getElementById("templateDropDown");

template.onmouseover = () => {
    if(tempcontent.className !== "templateDropDown"){
        tempcontent.classList = ("templateDropDown");
        tempcontent.style.display = "block";
    }

    template.onmouseleave = () => {
        tempcontent.classList= ("");
        tempcontent.style.display = "none";
    };

    tempcontent.onmouseover = () => {
        if(tempcontent.className !== "templateDropDown"){
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        tempcontent.onmouseleave = () => {
            tempcontent.classList.remove = ("templateDropDown");
            tempcontent.style.display = "none";
        };
    }
};