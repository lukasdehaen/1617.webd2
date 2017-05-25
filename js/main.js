var map;
      function initMap() {
        var myLatLng = {lat: 51.512964, lng: -0.114669};
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 4
        });
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'OFF Media Offices'
        });
        
        map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });
        


        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
        

        marker.addListener('click', function() {
          
          infowindow.open(map, marker);
          
          
        /*  if (map.zoom == 8) {
            map.setZoom(4); 
            map.setCenter(marker.getPosition());
          } else {
            map.setZoom(8);
            map.setCenter(marker.getPosition());
          }*/
          
        });
        
      }
      
