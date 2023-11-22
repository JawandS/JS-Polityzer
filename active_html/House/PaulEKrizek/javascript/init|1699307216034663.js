var map;
var searchMarker,searchInfowindow,searchInfowindowContent;
var placeAutocomplete;
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

	window.onload = function(){
		base_url = $("#base_url").val();
		initializeLocationAutocomplete();
	};

	window.onresize = function(event) {
		$('.parallax').parallax();
	};


    function initializeLocationAutocomplete(){
    	/*var input = document.getElementById('addressSearchInput');
    	placeAutocomplete = new google.maps.places.Autocomplete(input);
    	//placeAutocomplete.bindTo('bounds', map);
        placeAutocomplete.addListener('place_changed', function() {
        	//executePlaceSearch();
        });*/
        var timeout;
        $('#addressSearchInput').on('keyup',function(){
            //if you already have a timout, clear it
            if(timeout){ clearTimeout(timeout);}

            //start new time, to perform api call in 500ms
            timeout = setTimeout(function() {
                //Api Call
                getPlacesFromGoogle($('#addressSearchInput').val());
            },1300);
        });
    }

    function initResultClick(){
        $("#results li").off("click");
        $("#results li").on("click",function(){
            var result = $(this).html();
            $("#addressSearchInput").val(result);
            $("#results").hide();
            $("#results").html("");
        });
    }


    function getPlacesFromGoogle(searchQuery) {
        if(searchQuery == ""){
            $("#results").hide();
            $("#results").html("");
        }
        $("#results").html("");
        var displaySuggestions = function(predictions, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK) {
                alert(status);
                return;
            }
            var count = 1;
            predictions.forEach(function(prediction) {
                if(count <= 5){
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(prediction.description));
                    document.getElementById('results').appendChild(li);    
                }
                count++;
            });
            $("#results").show();
            initResultClick();
        };

        var service = new google.maps.places.AutocompleteService();
        service.getQueryPredictions({ input: searchQuery }, displaySuggestions);
    }



    function executePlaceSearch(){
    	if($("#addressSearchInput").val()!=""){
	          var place = placeAutocomplete.getPlace();
	          if (!place.geometry) {
	            // User entered the name of a Place that was not suggested and
	            // pressed the Enter key, or the Place Details request failed.
	            window.alert("No details available for input: '" + place.name + "'");
	            return;
	          }
	          var location = {
	          	"lat" : place.geometry.location.lat(),
	          	"lng" : place.geometry.location.lng()
	          }
	          console.log(location);
        }
    }
    

    function locationToMap(){
    	var address = $("#addressSearchInput").val();
    	if(address != ""){
    		window.location.href = base_url+"index.php/legislator?search="+address;
    	}
    }

   