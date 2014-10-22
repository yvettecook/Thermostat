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