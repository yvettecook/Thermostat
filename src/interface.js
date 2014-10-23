function ThermostatView(element) {
	this.element = $(element);
	this.thermostat = new Thermostat;
	this.element.text(this.thermostat.temperature);
	this.bindTo('#increaseTemperature', this.thermostat, this.thermostat.increaseTemperature, this.element);
	this.bindTo('#decreaseTemperature', this.thermostat, this.thermostat.decreaseTemperature, this.element);
	this.bindTo('#resetTemperature', this.thermostat, this.thermostat.resetTemperature, this.element);
};

ThermostatView.prototype.bindTo = function(control, obj, func, element) { 
	$(control).on('click', function() {
		element.text(func.call(obj));
	});
};
 
$(document).ready(function() {
	new ThermostatView('.temperature h1')
});



$.getJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data) { 
		var currentWeather = (data['list'][1]['main']['temp']);
		$('.outside_temperature h1').text(currentWeather)
	});

