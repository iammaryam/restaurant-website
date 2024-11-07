
function searched () {
    const usersInput = document.getElementById("header-search").value;
    
    if (usersInput == "food" || usersInput == "menu" || usersInput == "salad" || usersInput=="drink"
        || usersInput == "order"
    ) {
        document.querySelector("header").style.display = "none";
        document.querySelector("#big-plate").style.display = "none";
        document.querySelector("footer").style.display = "none";
    } else if (usersInput == "footer" || usersInput == "about" || usersInput == "contact" || usersInput=="youtube"
        || usersInput == "instagram" || usersInput == "facebook" || usersInput == "linkedin" || usersInput == "copyright"
    ) {
        document.querySelector("header").style.display = "none";
        document.querySelector("#big-plate").style.display = "none";
        document.querySelector("#three-plates").style.display = "none";
        document.querySelector("#menus").style.display = "none"; 
    } else if (usersInput == "plate" || usersInput == "tray") {
        document.querySelector("header").style.display = "none";
        document.querySelector("footer").style.display = "none";
        document.querySelector("#menus").style.display = "none";
        document.querySelector("#three-plates").style.display = "none";
    } else if (usersInput == "signup" || usersInput == "login" || usersInput == "discount" || usersInput == "shopping") {
        document.querySelector("#big-plate").style.display = "none";
        document.querySelector("footer").style.display = "none";
        document.querySelector("#menus").style.display = "none";
        document.querySelector("#three-plates").style.display = "none";
    }
}


function checked () {
    
    ourList = document.forms['first-menu'].getElementsByClassName("menu-input");
    checkedList = [];
    for (x in ourList) {
        if (ourList[x].checked) {
            checkedList.push(ourList[x].name);
        } else {
            continue
        }
    }

    return checkedList;
}

debugger;
listOfChoosenFoods = document.getElementById("first-menu").addEventListener("submit", checked);
