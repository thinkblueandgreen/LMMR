 
  var key = "YXCxotPOS3exx01x7bRBAT1rn1MHvH0k";
    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=sVCX8fpkv0OR2ToB2r8VZyOHoRua6l6i";
  console.log('hello'); 
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
      
      

  