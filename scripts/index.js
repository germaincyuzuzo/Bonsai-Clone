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
let starterPrice = document.getElementById("starterprice");
let proPrice = document.getElementById("proprice");
let businessPrice = document.getElementById("businessprice");
let counter = 1;
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
let durations = document.getElementsByClassName("duration");

    btntoggle.onclick = () =>{
        
        isActive = !isActive;
        btntoggle.classList.toggle("changetoggle", isActive);

        
        if (counter % 2 !==0){
            counter++;
            starterPrice.innerHTML = "17";
            proPrice.innerHTML = "32";
            businessPrice.innerHTML = "52";

            monthly.style.color = "gray";
            yearly.style.color = "black";

            durations[0].innerHTML = "/MONTH - BILLED YEARLY";

            durations[1].innerHTML = "/MONTH - BILLED YEARLY";

            durations[2].innerHTML = "/MONTH - BILLED YEARLY";

        } else if(counter % 2 ==0){
            counter++;
            starterPrice.innerHTML = "24";
            proPrice.innerHTML = "39";
            businessPrice.innerHTML = "79";

            yearly.style.color = "gray";
            monthly.style.color = "black";

            durations[0].innerHTML = "/MONTH";

            durations[1].innerHTML = "/MONTH";

            durations[2].innerHTML = "/MONTH";

        }

        
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
// ADDING BEHAVIOR TO THE FIRST DROPDOWN
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


// ADDING BEHAVIOR TO THE SECOND DROPDOWN

let contTemp = document.getElementById("contractTemp");
let tempCont = document.getElementById("tempCont");

contTemp.onmouseover = () => {
    if(tempCont.className !== "tempCont"){
        tempCont.classList = ("tempCont");
        tempCont.style.display = "block";
    }

    contTemp.onmouseleave = () => {
        tempCont.classList = ("");
        tempCont.style.display = "none";
    }

    tempCont.onmouseover = () => {
        if(tempCont.className !== "tempCont"){
            tempCont.classList = ("tempCont");
            tempCont.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        tempCont.onmouseleave = () => {
            tempCont.classList = ("");
            tempCont.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};

// ADDING BEHAVIOR TO THE PROPOSAL DROPDOWN

let propTemp = document.getElementById("proposalTemp");
let propContent = document.getElementById("propContent");

propTemp.onmouseover = () => {
    if(propContent.className !== "tempCont"){
        propContent.classList = ("tempCont");
        propContent.style.display = "block";
    }

    propTemp.onmouseleave = () => {
        propContent.classList = ("");
        propContent.style.display = "none";
    }

    propContent.onmouseover = () => {
        if(propContent.className !== "tempCont"){
            propContent.classList = ("tempCont");
            propContent.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        propContent.onmouseleave = () => {
            propContent.classList = ("");
            propContent.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};

// ADDING BEHAVIOR TO THE PROPOSAL DROPDOWN

let invoiceTemp = document.getElementById("invoiceTemp");
let invoiceContent = document.getElementById("invoiceContent");

invoiceTemp.onmouseover = () => {
    if(invoiceContent.className !== "tempCont"){
        invoiceContent.classList = ("tempCont");
        invoiceContent.style.display = "block";
    }

    invoiceTemp.onmouseleave = () => {
        invoiceContent.classList = ("");
        invoiceContent.style.display = "none";
    }

    invoiceContent.onmouseover = () => {
        if(invoiceContent.className !== "tempCont"){
            invoiceContent.classList = ("tempCont");
            invoiceContent.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        invoiceContent.onmouseleave = () => {
            invoiceContent.classList = ("");
            invoiceContent.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};


// ADDING BEHAVIOR TO THE AGREEMENT DROPDOWN

let agreeTemp = document.getElementById("agreementTemp");
let agreeContent = document.getElementById("agreementContent");

agreeTemp.onmouseover = () => {
    if(agreeContent.className !== "tempCont"){
        agreeContent.classList = ("tempCont");
        agreeContent.style.display = "block";
    }

    agreeTemp.onmouseleave = () => {
        agreeContent.classList = ("");
        agreeContent.style.display = "none";
    }

    agreeContent.onmouseover = () => {
        if(agreeContent.className !== "tempCont"){
            agreeContent.classList = ("tempCont");
            agreeContent.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        agreeContent.onmouseleave = () => {
            agreeContent.classList = ("");
            agreeContent.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};

// ADDING BEHAVIOR TO THE QUOTATION DROPDOWN

let quoteTemp = document.getElementById("quoteTemp");
let quoteContent = document.getElementById("quoteContent");

quoteTemp.onmouseover = () => {
    if(quoteContent.className !== "tempCont"){
        quoteContent.classList = ("tempCont");
        quoteContent.style.display = "block";
    }

    quoteTemp.onmouseleave = () => {
        quoteContent.classList = ("");
        quoteContent.style.display = "none";
    }

    quoteContent.onmouseover = () => {
        if(quoteContent.className !== "tempCont"){
            quoteContent.classList = ("tempCont");
            quoteContent.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        quoteContent.onmouseleave = () => {
            quoteContent.classList = ("");
            quoteContent.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};

// ADDING BEHAVIOR TO THE SCOPE OF WORK DROPDOWN

let scopeTemp = document.getElementById("scopeTemp");
let scopeContent = document.getElementById("scopeContent");

scopeTemp.onmouseover = () => {
    if(scopeContent.className !== "tempCont"){
        scopeContent.classList = ("tempCont");
        scopeContent.style.display = "block";
    }

    scopeTemp.onmouseleave = () => {
        scopeContent.classList = ("");
        scopeContent.style.display = "none";
    }

    scopeContent.onmouseover = () => {
        if(scopeContent.className !== "tempCont"){
            scopeContent.classList = ("tempCont");
            scopeContent.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        scopeContent.onmouseleave = () => {
            scopeContent.classList = ("");
            scopeContent.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};

// ADDING BEHAVIOR TO THE BRIEF DROPDOWN

let briefTemp = document.getElementById("briefTemp");
let briefContent = document.getElementById("briefContent");

briefTemp.onmouseover = () => {
    if(briefContent.className !== "tempCont"){
        briefContent.classList = ("tempCont");
        briefContent.style.display = "block";
    }

    briefTemp.onmouseleave = () => {
        briefContent.classList = ("");
        briefContent.style.display = "none";
    }

    briefContent.onmouseover = () => {
        if(briefContent.className !== "tempCont"){
            briefContent.classList = ("tempCont");
            briefContent.style.display = "block";
    
            tempcontent.classList = ("templateDropDown");
            tempcontent.style.display = "block";
        }
    
        briefContent.onmouseleave = () => {
            briefContent.classList = ("");
            briefContent.style.display = "none";

            tempcontent.classList = ("");
            tempcontent.style.display = "none";
        }
    }
};


if (window.innerWidth < 991){
    let menuopen = document.getElementById("menuopen");
    let header = document.getElementById("header");
    let mediamenu = document.getElementById("mediamenu");
    let menuclose = document.getElementById("menuclose");

    menuopen.onclick = () => {
        mediamenu.style.display = "block";
        header.style.display = "none";
    };

    menuclose.onclick = () =>{
        mediamenu.style.display = "none";
        header.style.display = "block";
    };
}