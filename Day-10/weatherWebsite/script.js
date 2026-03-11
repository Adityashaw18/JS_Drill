console.log('hello world!')
const API_KEY = "8fb602fd2b67d53fcd2549c021a4d222";
async function fetchWeatherDetails() {
    try {
    // let latitude = 15.333;
    // let longitude = 74.0833;
    let city = 'kolkata';

    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data =await response.json();
    console.log("Weather data :->" , data);

    // let newPara = document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    // document.body.appendChild(newPara);

    renderWeatherInfo(data);
    }
    catch(error) {
        console.log("Error found", error);
    }

} 

async function getCustomWeatherDetails() {
    try{
        let latitude = 34.0522;
    let longitude = -118.2437;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?let=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data);
    }
    catch(error){
        console.log("Error found", error);
    }
}

function switchTab(clickedTab) {
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }

    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainert.classList.remove("active");
        searchForm.classList.add("active");
    }
    else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
    }
    console.log("Current Tab", currentTab);
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}