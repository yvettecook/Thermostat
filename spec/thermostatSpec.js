describe('Thermostat', function () {

var thermostat;

    beforeEach(function () {
      thermostat = new Thermostat
    });

  describe('default settings', function () {

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

  });

  describe('custom settings', function () {

    it('can increase temperature by 10', function () {

      thermostat.increaseTemperatureBy(10)
      expect(thermostat.temperature).toEqual(30)

    });

     it('can decrease the temperature by 5', function () {

      thermostat.decreaseTemperatureBy(5);
      expect(thermostat.temperature).toEqual(15);

    });

  });

    
});