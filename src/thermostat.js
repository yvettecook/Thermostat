function Thermostat () {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSaverStatus = true;
  this.maximumTemperature = 25;
};

Thermostat.prototype.increaseTemperature = function() {
   return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
  if(this._isIncreaseValid(degrees)) return this.temperature += degrees;
  return this._setToMaxTemp();
};


Thermostat.prototype._isIncreaseValid = function(degrees) {
  return this.maximumTemperature > (this.temperature + degrees)
};

Thermostat.prototype._setToMaxTemp = function() {
  return this.temperature = this.maximumTemperature
};

Thermostat.prototype.decreaseTemperature = function() {
 return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
  if (this._isDecreaseValid(degrees)) return this.temperature -= degrees; 
  return this._setToMinTemp();
};

Thermostat.prototype._isDecreaseValid = function(degrees) {
  return this.minimumTemperature < (this.temperature - degrees);
};

Thermostat.prototype._setToMinTemp = function() {
  return this.temperature = this.minimumTemperature 
};

Thermostat.prototype.turnOffPowerSaver = function() {
  this.powerSaverStatus = false;
  this._setNewMaximumTemperature(32);
};

Thermostat.prototype.turnOnPowerSaver = function() {
  this.powerSaverStatus = true;
  this._setNewMaximumTemperature(25); 
};

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = 20;
};

Thermostat.prototype._setNewMaximumTemperature = function(degrees) {
  this.maximumTemperature = degrees
};