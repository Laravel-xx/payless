document.querySelector(".profile-box").addEventListener("click", ()=> {
    function profileDropdown (){
    document.querySelector(".profile-dropdown").classList.toggle("profile-dropdown-active");
    document.querySelector(".nav-bottom-container").classList.toggle("nav-bottom-container-fiter");
    toggleattribute();
    }
    setTimeout(profileDropdown, 1000);
})

function toggleattribute(){
    const profileArrow = document.querySelectorAll(".profile-box img")[1].getAttribute("src");
    if (profileArrow === 'icons/right-arrow.png') {
        document.querySelectorAll(".profile-box img")[1].setAttribute("src", "icons/down-arrow.png");
    } else {
        document.querySelectorAll(".profile-box img")[1].setAttribute("src", "icons/right-arrow.png");
    }
}

const transactionStatus = document.querySelectorAll(".transaction-status li");
transactionStatus.forEach(li => {
    const transactionSpan = li.querySelector("span");
    li.addEventListener("click", () => {
        removeTransactionEvent();
        li.classList.add("transaction-status-active");
        transactionSpan.classList.add("transaction-status-span-unset");

        if (li.classList.contains("tx-outgoing")){
            document.querySelector(".transaction-column-outgoing").classList.remove("transaction-column-inactive");
            document.querySelector(".transaction-column-outgoing").classList.add("transaction-column-active");
            document.querySelector(".transaction-column-incoming").classList.remove("transaction-column-active");
            document.querySelector(".transaction-column-incoming").classList.add("transaction-column-inactive");
            document.querySelector(".transaction-column-pending").classList.remove("transaction-column-active");
            document.querySelector(".transaction-column-pending").classList.add("transaction-column-inactive");
        } else if (li.classList.contains("tx-pending")) {
            document.querySelector(".transaction-column-pending").classList.remove("transaction-column-inactive");
            document.querySelector(".transaction-column-pending").classList.add("transaction-column-active");
            document.querySelector(".transaction-column-incoming").classList.remove("transaction-column-active");
            document.querySelector(".transaction-column-incoming").classList.add("transaction-column-inactive");
            document.querySelector(".transaction-column-outgoing").classList.remove("transaction-column-active");
            document.querySelector(".transaction-column-outgoing").classList.add("transaction-column-inactive");
        } else {
            document.querySelector(".transaction-column-incoming").classList.remove("transaction-column-inactive");
            document.querySelector(".transaction-column-incoming").classList.add("transaction-column-active");
            document.querySelector(".transaction-column-outgoing").classList.remove("transaction-column-active");
            document.querySelector(".transaction-column-outgoing").classList.add("transaction-column-inactive");
            document.querySelector(".transaction-column-pending").classList.remove("transaction-column-active");
            document.querySelector(".transaction-column-pending").classList.add("transaction-column-inactive");}
    })
    
})

 function removeTransactionEvent() {
        transactionStatus.forEach(li => {
         const transactionSpan = li.querySelector("span");
    li.classList.remove("transaction-status-active");
    transactionSpan.classList.remove("transaction-status-span-unset");
     if (transactionSpan.classList.contains("transaction-status-span_unset" || li.classList.contains("tx-incoming"))) {
            transactionSpan.classList.remove("transaction-status-span_unset")
            li.classList.remove("tx-incoming")
        }
})
}