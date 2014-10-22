describe('Thermostat', function () {

var thermostat;

    beforeEach(function () {
      thermostat = new Thermostat
    });

  describe('default temperature settings', function () {

    it('is 20 degrees', function () {

      expect(thermostat.temperature).toEqual(20);

    });

    it('can increase the temperature by 1', function () {

      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);

    });

    it('can decrease the temperature by 1', function () {

      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);

    });

    it('has a minimum temperature of 10 degrees', function () {

     expect(thermostat.minimumTemperature).toEqual(10);

    });

    it('can check if requested temperature is below the minimum', function () {

      expect(thermostat._isDecreaseValid(15)).toBe(false);

    });

     it('can check if requested temperature is above the minimum', function () {

      expect(thermostat._isDecreaseValid(2)).toBe(true);

    });

    it('it will not go below its minimum temperature', function() {

      thermostat.decreaseTemperatureBy(15);
      expect(thermostat.temperature).toEqual(10);

    });

    it('it will not go above its maximum temperature', function() {

      thermostat.increaseTemperatureBy(20);
      expect(thermostat.temperature).toEqual(25);

    });

    it('can reset temperature to 20 degrees', function () {

      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);

    });

  });

  describe('custom settings', function () {

    it('can increase temperature by 10', function () {

      thermostat.increaseTemperatureBy(5)
      expect(thermostat.temperature).toEqual(25)

    });

     it('can decrease the temperature by 5', function () {

      thermostat.decreaseTemperatureBy(5);
      expect(thermostat.temperature).toEqual(15);

    });

  });

  describe('Power saving mode', function () {

      it('is on by default', function (){

        expect(thermostat.powerSaverStatus).toEqual(true);

      });

      it('when on, the maximum temperature is 25 degrees', function() {

        expect(thermostat.maximumTemperature).toEqual(25);

      });

      it('can be turned off', function() {

        thermostat.turnOffPowerSaver()
        expect(thermostat.powerSaverStatus).toEqual(false)

      });

      it('when off, the maximum temperature is 32 degrees', function () {

        thermostat.turnOffPowerSaver();
        expect(thermostat.maximumTemperature).toEqual(32)

      });

      it('when turned back on, the maximum temperature is reset to 25', function() {

        thermostat.turnOffPowerSaver()
        thermostat.turnOnPowerSaver()
        expect(thermostat.maximumTemperature).toEqual(25)

      });




  });

    
});