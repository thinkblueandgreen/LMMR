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

            if (response.page.number === 0) {
                console.log("team doesn't exist");
                //need to display error on webpage
            }

            else {

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
                }
            }
            // return response
        })
})
