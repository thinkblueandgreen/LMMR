
var key = "YXCxotPOS3exx01x7bRBAT1rn1MHvH0k";
var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=basketball&apikey=sVCX8fpkv0OR2ToB2r8VZyOHoRua6l6i";


$.ajax({
    url: ticketMasterURL,
    method: "GET"
})

    .then(function (response) {
        console.log(response);

        var events = response._embedded.events;
        events.forEach(element => {

            console.log(element.name);

        });


    });
//get places by location 

var data = null;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=92124"); //note location = 92124
xhr.setRequestHeader("Authorization", "Bearer 1BeBj-4omHzaOR1JLPwH5DG5o3hVEsXNwnynnclWHxfKwNztWHnnV8ti4WOk3vArHSyRIRKOxLD93LCoVuCG08tb2UJR3Bved1WHYnWxwLVsGDObDgt6it2Zr2uyXXYx");
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        console.log(data);
    }
});
xhr.send(data);

//get places by keyword

var dataKeyword = null;
var xhrKeyword = new XMLHttpRequest();

xhrKeyword.open("GET", "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food");
xhrKeyword.setRequestHeader("Authorization", "Bearer 1BeBj-4omHzaOR1JLPwH5DG5o3hVEsXNwnynnclWHxfKwNztWHnnV8ti4WOk3vArHSyRIRKOxLD93LCoVuCG08tb2UJR3Bved1WHYnWxwLVsGDObDgt6it2Zr2uyXXYx");

xhrKeyword.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        console.log(dataKeyword);
    }
});
xhrKeyword.send(dataKeyword);










