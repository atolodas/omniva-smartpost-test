function makeValue (string) {
	return string.replace(/[^a-zA-Z0-9\sÕÄÖÜõäöü]/gi, '').replace(/[\s]/g, '_').toLowerCase();
};

function CallURL() {
	var testGroupName = "";
	$("#location_filter").append('<option ' + 'id="first_option_area">Select area</option>');
	$("#address_filter").append('<option ' + 'id="first_option_address">Select address</option>');
	$("#city_filter").append('<option ' + 'id="first_option_city">Select city</option>');
			for (var i = 0; i < places_info.length; i++){
				if (places_info[i].group_name !== testGroupName) {
					testGroupName = places_info[i].group_name;
					$("#location_filter").append('<option ' + 'value="'+ makeValue(places_info[i].group_name) + '">' + places_info[i].group_name + '</option>');
		};
	};
};

function populateCity (s1, s2) {
	$("#city_filter").append('<option ' + 'id="first_option_city">Select city</option>');
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	var cityArr = [];
	s2.innerHTML = "";
	for (var i = 0; i < places_info.length; i++){
		if (makeValue(places_info[i].group_name) === s1.value){
			if (cityArr.indexOf(makeValue(places_info[i].city) + "|" + places_info[i].city) === -1){
			cityArr.push(makeValue(places_info[i].city) + "|" + places_info[i].city);
			}
		}
	}
	console.log(cityArr);
	var newOption = document.createElement("option");
		newOption.value = "first_option_city";
		newOption.innerHTML = "Select city";
		s2.options.add(newOption);
	for (var option in cityArr) {
		var pair = cityArr[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
};

function populateAddress (s1, s2) {
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	var addressArr = [];
	s2.innerHTML = "";
	console.log(s1.value);
	for (var i = 0; i < places_info.length; i++){
		console.log(places_info[i].city);
		if (places_info[i].city.toLowerCase() === s1.value){
			addressArr.push(makeValue(places_info[i].address) + "|" + places_info[i].address);
		}
	}
	console.log(addressArr);
	var newOption = document.createElement("option");
		newOption.value = "first_option_address";
		newOption.innerHTML = "Select address";
		s2.options.add(newOption);
	for (var option in addressArr) {
		var pair = addressArr[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
};