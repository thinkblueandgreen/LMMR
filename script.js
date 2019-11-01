
var data = null;
var xhr = new XMLHttpRequest();
var zipCode = "92124"; 
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + zipCode); //note location = 92124
xhr.setRequestHeader("Authorization", "Bearer 1BeBj-4omHzaOR1JLPwH5DG5o3hVEsXNwnynnclWHxfKwNztWHnnV8ti4WOk3vArHSyRIRKOxLD93LCoVuCG08tb2UJR3Bved1WHYnWxwLVsGDObDgt6it2Zr2uyXXYx");
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        console.log(data);
    }
});
xhr.send(data);











