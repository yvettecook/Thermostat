function ThermostatView () {
	
	
}

$(document).ready(function() { });

var thermostat = new Thermostat
$('.temperature h1').text(thermostat.temperature);

$('#increaseTemperature').on('click', function () {
	$('.temperature h1').text(thermostat.increaseTemperature());
});

$('#decreaseTemperature').on('click', function () {
	$('.temperature h1').text(thermostat.decreaseTemperature());
});

$('#resetTemperature').on('click', function () {
	$('.temperature h1').text(thermostat.resetTemperature());
});





//Step 1: change h1 number to a temperature of the thermostat - BOOOOOOM! Test passed!
//Step 2: bind the increaseTemperature element to the javascript method

