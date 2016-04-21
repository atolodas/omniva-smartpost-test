// passed JSON obj
var myObj;
var addressList = [];

// function to pull JSON from linked PHP
function CallURL() {
	$.ajax({
	//the browser path to the file
    url: 'http://localhost/aleks/Omnivia%20post%20API/json.php',


    type: "GET",
    dataType: "json",
    async:false,
     success: function (json) {
		 //filtering the list to get only parcel automats .TYPE = 0 in Estonia .NAME = EE
         myObj = json.filter(function(obj){
			 if (obj.A0_NAME === "EE" && obj.TYPE === "0") { return true;}
			 return false;
		 });
	},
    error: function (msg) {
		 console.log("error");
    }
});
	for (var index in myObj) {
		addressList.push(myObj[index].A1_NAME + ", " + myObj[index].A2_NAME + ", " + myObj[index].A5_NAME + " " + myObj[index].A7_NAME + " " + myObj[index].NAME);
		}
	//$( "#tags" ).autocomplete({
	//	source: addressList
//	});
		console.log(addressList);
	// console.log(myObj);
};


// used to populate the select html tag with options
function populateCity (s1) {
	$("#city_filter").append('<option ' + 'id="first_option_address">Write here</option>');
	var s1 = document.getElementById(s1);
	for (var index in myObj) {
		var pair = [];
		pair[0] = myObj[index].ZIP;
		pair[1] = myObj[index].A1_NAME + ", " + myObj[index].A2_NAME + ", " + myObj[index].A5_NAME + " " + myObj[index].A7_NAME + " " + myObj[index].NAME;
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s1.options.add(newOption);
	}
};

// used to populate addressList to se with UI autocomplete js
function getList () {
	for (var index in myObj) {
		addressList.push(myObj[index].A1_NAME + ", " + myObj[index].A2_NAME + ", " + myObj[index].A5_NAME + " " + myObj[index].A7_NAME + " " + myObj[index].NAME);
	}
};