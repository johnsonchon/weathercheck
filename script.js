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


// Date Section
var date = document.getElementById("date");

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDate();

var stringMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var finalMonth = stringMonths[month];

date.innerHTML = finalMonth + " " + day + " " + year
// End Date Section

// Header Words
var topHeader = document.getElementById('topheader');
var lowHeader = document.getElementById('lowheader');
var videoDom = document.getElementById('videoarea');

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



// Geolocating API
var city = document.getElementById('city');
var state = document.getElementById('state');
var degrees = document.getElementById('temp');
var typeDay = document.getElementById('typeday');
var subText = document.getElementById('subtext');

function getGeo() {
    var geoLocate = new XMLHttpRequest();
    geoLocate.open('GET', 'https://ipinfo.io?token=4475ce21dad5be');
    geoLocate.onload = function () {
        var geoData = JSON.parse(geoLocate.responseText);
        console.log(geoData);
        city.innerHTML = geoData.city;
        state.innerHTML = geoData.region;

        // Weather API
        var latLong = geoData.loc;

        function getWeather() {
            var weather = new XMLHttpRequest();
            weather.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4af05e1fd2c612446517c7a1ce9aae7c/' + latLong);
            weather.onload = function () {
                var weatherData = JSON.parse(weather.responseText);
                console.log(weatherData);
                degrees.innerHTML = weatherData.currently.temperature;
                typeDay.innerHTML = weatherData.currently.summary;
                subText.innerHTML = weatherData.daily.summary;

                // Words Data
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

                function lowHeaders() {
                    if (weatherData.currently.icon = "Clear") {
                        lowHeader.innerHTML = lowOptions[1];
                    }

                    else if (weatherData.currently.icon = "Partly-Cloudy-Day" || "Partly-Cloudy-Night" || "Cloudy") {
                        lowHeader.innerHTML = lowOptions[2];
                    }

                    else if (weatherData.currently.icon = "Sleet") {
                        lowHeader.innerHTML = lowOptions[3];
                    }

                    else if (weatherData.currently.icon = "Snow") {
                        lowHeader.innerHTML = lowOptions[4];
                    }

                    else if (weatherData.currently.icon = "Wind") {
                        lowHeader.innerHTML = lowOptions[5];
                    }

                    else if (weatherData.currently.icon = "Fog") {
                        lowHeader.innerHTML = lowOptions[6];
                    }

                    else {
                        lowHeader.innerHTML = lowOptions[0];
                    }
                }
                lowHeaders();



                // function headers() {
                //     if (weatherData.currently.icon = "Clear") {
                //         topHeader.innerHTML = topOptions[1];
                //         lowHeader.innerHTML = lowOptions[1];
                //     }
                    
                //     else if (weatherData.currently.icon = "Partly-Cloudy-Day") {
                //         topHeader.innerHTML = topOptions[1];
                //         lowHeader.innerHTML = lowOptions[2];
                //     }

                //     else if (weatherData.currently.icon = "Partly-Cloudy-Night") {
                //         topHeader.innerHTML = topOptions[1];
                //         lowHeader.innerHTML = lowOptions[2];
                //     }

                //     else if (weatherData.currently.icon = "Cloudy") {
                //         topHeader.innerHTML = topOptions[1];
                //         lowHeader.innerHTML = lowOptions[2];
                //     }

                //     else if (weatherData.currently.icon = "Rain") {
                //         topHeader.innerHTML = topOptions[0];
                //         lowHeader.innerHTML = lowOptions[0];
                //     }

                //     else if (weatherData.currently.icon = "Sleet") {
                //         topHeader.innerHTML = topOptions[0];
                //         lowHeader.innerHTML = lowOptions[3];
                //     }

                //     else if (weatherData.currently.icon = "Snow") {
                //         topHeader.innerHTML = topOptions[3];
                //         lowHeader.innerHTML = lowOptions[4];
                //     }

                //     else if (weatherData.currently.icon = "Wind") {
                //         topHeader.innerHTML = topOptions[0];
                //         lowHeader.innerHTML = lowOptions[5];
                //     }

                //     else if (weatherData.currently.icon = "Fog") {
                //         topHeader.innerHTML = topOptions[4];
                //         lowHeader.innerHTML = lowOptions[6];
                //     }
                // }
                // headers();

                // End Words Data

                // Turn weather into string
                var videoSearch;
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
                    // if (weatherData.currently.icon = "Cloudy") {
                    //     videoSearch = "cloudy"
                    // }
                    else if (weatherData.currently.icon = "Sleet" || "Snow") {
                        videoSearch = "snow"
                    }
                    // if (weatherData.currently.icon = "Snow") {
                    //     videoSearch = "snow"
                    // }
                    else if (weatherData.currently.icon = "Wind") {
                        videoSearch = "windy"
                    }
                    else if (weatherData.currently.icon = "Fog") {
                        videoSearch = "foggy"
                    }
                    // if (weatherData.currently.icon = "Rain") {
                    //     videoSearch = "rain"
                    // }
                    else {
                        videoSearch = "rain"
                    }
                }
                searchText();

                // End Turn weather into string


                // Video API
                
                function video() {
                    var videoApi = new XMLHttpRequest();
                    videoApi.open('GET', 'https://pixabay.com/api/videos/?key=4282776-27fa57906aa34123504a6dc56&q=' + videoSearch);
                    videoApi.onload = function () {
                        var videoData = JSON.parse(videoApi.responseText);
                        console.log(videoData);
                        if (weatherData.currently.icon = "Clear") {
                            videoDom.src = videoData.hits[0].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Partly-Cloudy-Day") {
                            videoDom.src = videoData.hits[2].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Partly-Cloudy-Night") {
                            videoDom.src = videoData.hits[1].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Cloudy") {
                            videoDom.src = videoData.hits[7].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Sleet") {
                            videoDom.src = videoData.hits[17].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Snow") {
                            videoDom.src = videoData.hits[17].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Wind") {
                            videoDom.src = videoData.hits[0].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Fog") {
                            videoDom.src = videoData.hits[4].videos.large.url;
                        }
                        else if (weatherData.currently.icon = "Rain") {
                            videoDom.src = videoData.hits[11].videos.large.url;
                        }
                    }
                    videoApi.send();

                }
                video();
                // End Video API
            }
            weather.send();
        }
        getWeather();
        // End Weather API
    }
    geoLocate.send();
}
getGeo();







