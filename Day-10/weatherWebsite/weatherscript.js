const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");

// const accessData = document.querySelector("[data-grantAccess]");

const searchForm = document.querySelector("[data-searchForm]");

const loadingScreen = document.querySelector("[loading-container]");

const userInfoContainer = (".user-info-container");

// Initial Variables

const API_KEY = "0oo00000o0o0o0";
let currentTab = userTab;
currentTab.classList.add("current-tab");

function switchTab (clickedTab) {
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab"); 
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(searchTab);
});