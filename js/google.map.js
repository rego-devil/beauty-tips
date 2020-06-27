(function() {
	
	function initialize() {

			var marker_1905 = new google.maps.Marker({
				position: new google.maps.LatLng(53.9090022, 27.5232383),
				icon: "img/marker.png",
				map: map
			});
			  
			var marker_1905_info = new google.maps.InfoWindow({
				content: '<p><b>1905.ru</b></p>Москва, Красная Пресня 44 стр. 3<br/>Пн-Пт с 10:00 до 21:00<br/>Сб-Вс с 10:00 до 18:00<br/>Тел.: 8 (495) 660-19-05'});
			
			google.maps.event.addListener(marker_1905, 'click', function() {marker_1905_info.open(map,marker_1905);});
			
			var marker_rollermag = new google.maps.Marker({
				position: new google.maps.LatLng(53.9024584, 27.5847489),
				icon: "img/marker.png",
				map: map
			});
			
			var marker_rollermag_info = new google.maps.InfoWindow({content: '<p><b>Роллер Маг</b></p>Москва, ул. Новозаводская, д.2<br/>Пн-Вс с 10:00 до 21:00<br/>Тел.: 8 (495) 660-38-72'});
			
			google.maps.event.addListener(marker_rollermag, 'click', function() {marker_rollermag_info.open(map,marker_rollermag);});
		
			var mogilev1 = new google.maps.Marker({
				position: new google.maps.LatLng(53.9083552,30.3175354),
				icon: "img/marker.png",
				map: map
			});
			  
			var mogilev1_info = new google.maps.InfoWindow({
				content: '<p><b>1905.ru</b></p>Москва, Красная Пресня 44 стр. 3<br/>Пн-Пт с 10:00 до 21:00<br/>Сб-Вс с 10:00 до 18:00<br/>Тел.: 8 (495) 660-19-05'});
			
			google.maps.event.addListener(mogilev1, 'click', function() {mogilev1_info.open(map,mogilev1);});
		
		
			var gomel1 = new google.maps.Marker({
				position: new google.maps.LatLng(52.4389338,30.985096),
				icon: "img/marker.png",
				map: map
			});
			  
			var gomel1_info = new google.maps.InfoWindow({
				content: '<p><b>1905.ru</b></p>Москва, Красная Пресня 44 стр. 3<br/>Пн-Пт с 10:00 до 21:00<br/>Сб-Вс с 10:00 до 18:00<br/>Тел.: 8 (495) 660-19-05'});
			
			google.maps.event.addListener(gomel1, 'click', function() {gomel1_info.open(map,gomel1);});
							
	}

	
	var map;
	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(53.9063535, 27.575573)
	};
							
	map = new google.maps.Map($('.map-container')[0], mapOptions);
	initialize();
	
	$('select.selectCity').change( function(e){
		
		if ( this.value == 1 ) {
			map.setCenter(new google.maps.LatLng(53.9090022, 27.5232383));
		}
		else if ( this.value == 2 ) {
			map.setCenter(new google.maps.LatLng(53.8992903,30.3489334));
		}
		else if ( this.value == 3 )  {
			map.setCenter(new google.maps.LatLng(52.4420594,30.9736087));
		}
	});

})();
//google.maps.event.addDomListener(window, 'load', initialize);					
		
		
			
			
			