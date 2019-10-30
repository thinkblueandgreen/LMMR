// building ticketmaster URL
function ticketMasterQueryURL() {
    var selectedGame = $("#search-term").val().trim();
    var ticketMasterQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + selectedGame + "&apikey=sVCX8fpkv0OR2ToB2r8VZyOHoRua6l6i";
    return ticketMasterQueryURL
}

// Getting search term using search button
$("#run-search").on('click', function (event) {
    event.preventDefault();

    ticketMasterQueryURL();

    $.ajax({ url: ticketMasterQueryURL(), method: "GET" })
        .then(function (response) {
            console.log(response);

            for (i = 0; i < 5; i++) {
                var gameName = response._embedded.events[i].name;
                
                var location = response._embedded.events[i]._embedded.venues[0].name;
                var address = response._embedded.events[i]._embedded.venues[0].address.line1;
                var city = response._embedded.events[i]._embedded.venues[0].city.name;
                var stateCode = response._embedded.events[i]._embedded.venues[0].state.stateCode;
                var countryName = response._embedded.events[i]._embedded.venues[0].country.name;
                var dateOfEvent = response._embedded.events[i].dates.start.localDate;
                var timeofEvent = response._embedded.events[i].dates.start.localTime;

                var $logEachGameDetail = $("<div>");
                $logEachGameDetail.append("<h4>" + gameName + "</h4>" + "Stadium : " + location + "<br>" + address + "<br>" + city + ", " + countryName + "<br>" + "Date : " + dateOfEvent + ", " + timeofEvent);
                $("#searchDisplaySection").append($logEachGameDetail);


                var zipCode = response._embedded.events[i]._embedded.venues[0].postalCode;

                // now for the beer!

                var data = null;
                var xhr = new XMLHttpRequest();

                xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + zipCode);
                xhr.setRequestHeader("Authorization", "Bearer 1BeBj-4omHzaOR1JLPwH5DG5o3hVEsXNwnynnclWHxfKwNztWHnnV8ti4WOk3vArHSyRIRKOxLD93LCoVuCG08tb2UJR3Bved1WHYnWxwLVsGDObDgt6it2Zr2uyXXYx");
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        data = JSON.parse(this.responseText);
                        console.log(data);

                        

                        data.businesses.forEach(restaurant => {              
                            restaurant.categories.forEach(category => {
                                if (category.alias === 'bars'){
                                    //logs the local bars to the console
                                    console.log(restaurant.name); 
                                };
                         });       
                        
                    })
                }
                });
    xhr.send(data);

}
        })
})
