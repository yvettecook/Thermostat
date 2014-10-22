function Thermostat () {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSaverStatus = true;
  this.maximumTemperature = 25;
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
  if (this._isDecreaseValid(degrees)) { 
    this.temperature -= degrees; 
  } else { 
    this._setToMinTemp()
  };
};

Thermostat.prototype._isDecreaseValid = function(degrees) {
  return this.minimumTemperature < (this.temperature - degrees);
};

Thermostat.prototype._setToMinTemp = function() {
  this.temperature = this.minimumTemperature 
};

Thermostat.prototype.turnOffPowerSaver = function() {
  this.powerSaverStatus = false;
  this.maximumTemperature = 32;
};