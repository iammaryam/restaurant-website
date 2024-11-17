function displayNone(addList) {
    var selectorList = [];
    selectorList.push.apply(selectorList, addList)
    for (x in selectorList) {
        document.querySelector(selectorList[x]).style.display = "none";
    }
}

function searched () {
    const usersInput = document.getElementById("header-search").value;
    if (usersInput == "food" || usersInput == "menu" || usersInput == "salad" || usersInput=="drink"
        || usersInput == "order"
    ) {
        displayNone(["#big-plate", "footer", "header"])
    } else if (usersInput == "footer" || usersInput == "about" || usersInput == "contact" || usersInput=="youtube"
        || usersInput == "instagram" || usersInput == "facebook" || usersInput == "linkedin" || usersInput == "copyright"
    ) {
        displayNone(["#big-plate", "header", "#menus", "#three-plates"]) 
    } else if (usersInput == "plate" || usersInput == "tray") {
        displayNone(["header", "footer", "#menus", "#three-plates"])
    } else if (usersInput == "signup" || usersInput == "login" || usersInput == "discount" || usersInput == "shopping") {
        displayNone(["#big-plate", "footer", "#menus", "#three-plates"])
    }
}



















function checked () {
    let verified = document.querySelector(".menu-verified");

    document.getElementById("first-menu-button").onclick = function () {
        ourList = document.forms['first-menu'].getElementsByClassName("menu-input");
        checkedList1 = [];
        for (x in ourList) {
            if (ourList[x].checked) {
                checkedList1.push(ourList[x].name);
            } else {
                continue
            }
        }
        verified.innerText = "Your order containing : " + checkedList1 + ", has been successfully placed."
        +"\nAnd it will be sent to your address within half an hour.";
        verified.style.display = "block";
        document.getElementById("main-content").style.display = "none";
        document.querySelector("header").style.display = "none";
        document.querySelector("footer").style.display = "none";
    }

    document.getElementById("second-menu-button").onclick = function () {
        ourList = document.forms['second-menu'].getElementsByClassName("menu-input");
        checkedList2 = [];
        for (x in ourList) {
            if (ourList[x].checked) {
                checkedList2.push(ourList[x].name);
            } else {
                continue
            }
        }
        verified.innerText = "Your order containing : " + checkedList2 + ", has been successfully placed."
        +"\nAnd it will be sent to your address within half an hour.";
        verified.style.display = "block";
        document.getElementById("main-content").style.display = "none";
        document.querySelector("header").style.display = "none";
        document.querySelector("footer").style.display = "none";
    }

    document.getElementById("third-menu-button").onclick = function () {
        ourList = document.forms['third-menu'].getElementsByClassName("menu-input");
        checkedList3 = [];
        for (x in ourList) {
            if (ourList[x].checked) {
                checkedList3.push(ourList[x].name);
            } else {
                continue
            }
        }
        verified.innerText = "Your order containing : " + checkedList3 + ", has been successfully placed."
        +"\nAnd it will be sent to your address within half an hour.";
        verified.style.display = "block";
        document.getElementById("main-content").style.display = "none";
        document.querySelector("header").style.display = "none";
        document.querySelector("footer").style.display = "none";
    }
}
