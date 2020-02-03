# Weathercheck App

A simple application using 3 APIs to check the weather in your location.

#weather #api

## APIs used:

- Darksky
<a href="https://darksky.net/forecast/40.7127,-74.0059/us12/en" target="_blank">
<img src="https://i.imgur.com/g7uvSdk.png"/>
</a>


- IPInfo
<a href="https://ipinfo.io" target="_blank">
<img src="https://i.imgur.com/Hzf5BXZ.png"/>  
</a>


- Pixabay
<a href="https://pixabay.com" target="_blank">
<img src="https://i.imgur.com/iOWsmts.png"/>  
</a>

## Customized Dashboard (more than just displaying the API)
- Here, instead of just displaying the information from an API, I wanted a customized way to inform the user what is happening.
```
// Header Words
var topHeader = document.getElementById('topheader');
var lowHeader = document.getElementById('lowheader');

var topOptions = [
    "Yikes!",
    "Awesome!",
    "Interesting",
    "Oooh",
    "It's Foggy!"
];

var lowOptions = [
    "Better grab an umbrella!",
    "Go out and enjoy the nice weather!",
    "It seem pretty nice out!",
    "You might want to stay in doors!",
    "Looks like winter wonderland!",
    "It's going to be windy!",
    "Careful, drive safe out there!"
];

// End Header Words
```
- I used the "icon" data to determine how the headers should be displayed
```
function topHeaders() {
                    if (weatherData.currently.icon = "Clear" || "Partly-Cloudy-Day" || "Partly-Cloudy-Night" || "Cloudy") {
                        topHeader.innerHTML = topOptions[1];
                    }

                    else if (weatherData.currently.icon = "Snow") {
                        topHeader.innerHTML = topOptions[3];
                    }

                    else if (weatherData.currently.icon = "Fog") {
                        topHeader.innerHTML = topOptions[4];
                    }

                    else {
                        topHeader.innerHTML = topOptions[4];
                    }
                }
                topHeaders();
                
```
- I wanted the bottom corner to say whether it is "Today" or "Tonight"

```
// Time Section
var timeDay = document.getElementById('timeday');
var time = new Date().getHours();


function theTime() {
    if (time < 16 && time > 3) {
        timeDay.innerHTML = 'Today';
    }
    else {
        timeDay.innerHTML = 'Tonight';
    }
};

theTime();
//  End Time Section
```

- I wanted the background to be a video that represents what the weather is.
```
function searchText() {
                    if (weatherData.currently.icon = "Clear") {
                        videoSearch = "clear sky"
                    }
                    else if (weatherData.currently.icon = "Partly-Cloudy-Day" || "Cloudy") {
                        videoSearch = "cloudy"
                    }
                    else if (weatherData.currently.icon = "Partly-Cloudy-Night") {
                        videoSearch = "cloudy night"
                    }
                    else if (weatherData.currently.icon = "Sleet" || "Snow") {
                        videoSearch = "snow"
                    }
                    else if (weatherData.currently.icon = "Wind") {
                        videoSearch = "windy"
                    }
                    else if (weatherData.currently.icon = "Fog") {
                        videoSearch = "foggy"
                    }
                    else {
                        videoSearch = "rain"
                    }
                }
                searchText();
```
