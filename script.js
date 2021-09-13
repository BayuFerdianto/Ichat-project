let setting = document.querySelector(".setting-menu");
let darkOn = document.getElementById("dark-click");
function settingMenuToggle() {
    setting.classList.toggle("setting-menu-hight");
}


darkOn.onclick = function() {
    darkOn.classList.toggle("dark-btn");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light") {
    darkOn.classList.remove("dark-btn");
    document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") == "dark") {
    darkOn.classList.add("dark-btn");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

// arrow class 
let set = document.querySelector('.seting-link');
let set1 = document.querySelector('.seting-link1');
let set2 = document.querySelector('.seting-link2');
let set3 = document.querySelector('.seting-link3');
let get = document.querySelectorAll('#arrow');
set.onclick = function() {
    get[0].classList.toggle("arrow");
}
set1.onclick = function() {
    get[1].classList.toggle("arrow");
}
set2.onclick = function() {
    get[2].classList.toggle("arrow");
}

set3.onclick = function() {
    get[3].classList.toggle("arrow");
}