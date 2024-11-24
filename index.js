/*main page codes*/

document.getElementById("header-search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searched();
    }
});

function displayNone(addList) {
    var selectorList = [];
    selectorList.push.apply(selectorList, addList);
    for (x in selectorList) {
        document.querySelector(selectorList[x]).style.display = "none";
    }
}

function searched () {
    const usersInput = document.getElementById("header-search").value;
    if (usersInput == "food" || usersInput == "menu" || usersInput == "salad" || usersInput=="drink"
        || usersInput == "order"
    ) {
        displayNone(["#big-plate", "footer", "header"]);
    } else if (usersInput == "footer" || usersInput == "about" || usersInput == "contact" || usersInput=="youtube"
        || usersInput == "instagram" || usersInput == "facebook" || usersInput == "linkedin" || usersInput == "copyright"
    ) {
        displayNone(["#big-plate", "header", "#menus", "#three-plates"]);
    } else if (usersInput == "plate" || usersInput == "tray") {
        displayNone(["header", "footer", "#menus", "#three-plates"]);
    } else if (usersInput == "signup" || usersInput == "login" || usersInput == "discount" || usersInput == "shopping") {
        displayNone(["#big-plate", "footer", "#menus", "#three-plates"]);
    }
}

 function buttonClicked() {
    ourList = document.getElementsByClassName("menu-input");
    const checkedList = [];
    for (x in ourList) {
        if (ourList[x].checked) {
            checkedList.push(ourList[x].name);
        } else {
            continue
        }
    }
    let verified = document.querySelector(".menu-verified");
    verified.innerText = "Your order containing : " + checkedList + ", has been successfully placed."
    +"\nAnd it will be sent to your address within half an hour.";
    verified.style.display = "block";
    document.getElementById("main-content").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector("footer").style.display = "none";
}



/*signin-up page codes*/

function signupClicked() {
    document.querySelector("body.signin-up #flex-second").style.backgroundImage = "linear-gradient(to right, #821131, #FABC3F)";
    document.querySelector("body.signin-up #flex-second").style.color = "white";
    document.querySelector("body.signin-up #flex-first").style.backgroundImage = "None";
    document.querySelector("body.signin-up #flex-first").style.color = "black";
    document.querySelector("body.signin-up #only-signup").style.display = "block";
    document.querySelector("body.signin-up #forgot-pass").style.display = "none";
    document.querySelector("body.signin-up #login-button").innerText = "Signup";
    document.querySelector("body.signin-up #not-member").style.display = "none";
}


function loginClicked() {
    document.querySelector("body.signin-up #flex-second").style.backgroundImage = "None";
    document.querySelector("body.signin-up #flex-second").style.color = "black";
    document.querySelector("body.signin-up #flex-first").style.backgroundImage = "linear-gradient(to right, #821131, #FABC3F)";
    document.querySelector("body.signin-up #flex-first").style.color = "white";
    document.querySelector("body.signin-up #only-signup").style.display = "None";
    document.querySelector("body.signin-up #forgot-pass").style.display = "block";
    document.querySelector("body.signin-up #login-button").innerText = "Login";
    document.querySelector("body.signin-up #not-member").style.display = "block";
}



/*Q & A page codes*/

function displayAnswer() {
        document.querySelector("body.questions-page #first-item").classList.toggle("class-add-item");
        document.querySelector("body.questions-page #first-item-paragraph").classList.toggle("item-paragraph");
        document.querySelector("body.questions-page .item-button").classList.toggle("minus-button");
}
