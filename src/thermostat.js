function Thermostat () {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemperature = function() {
  this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
  this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
  this.temperature -= degrees;
};