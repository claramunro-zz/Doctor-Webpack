import Birthday from '../src/solar';

describe('Birthday', function () {

  // TESTS FOR AGES
  
  it("should calculate age", function () {
    let testInfo = new Birthday(1992, 11, 11);    // year month day
    expect(testInfo.calcAge()).toEqual(26);
  });

  it("should calculate mercury age", function () {
    let testInfo = new Birthday(1992, 11, 11);    // year month day
    expect(testInfo.mercuryAge(26)).toEqual("6.2");
  });

  it("should calculate venus age", function () {
    let testInfo = new Birthday(1992, 11, 11);    // year month day
    expect(testInfo.venusAge(26)).toEqual("16.1");
  });

  it("should calculate mars age", function () {
    let testInfo = new Birthday(1992, 11, 11);    // year month day
    expect(testInfo.marsAge(26)).toEqual("48.9");
  });

  it("should calculate jupiter age", function () {
    let testInfo = new Birthday(1992, 11, 11);    // year month day
    expect(testInfo.jupiterAge(26)).toEqual("308.4");
  });

  // TESTS FOR EXPECTANCY

  it("should calculate earth expectancy", function () {
    let testInfo = new Birthday(1992, 11, 11, 30);    // year month day
    expect(testInfo.earthExpectancy(26)).toEqual(`You still have 4 years till you reach your life expectancy of 30 year/s`);
  });

  it("should calculate mercury expectancy", function () {
    let testInfo = new Birthday(1992, 11, 11, 30);    // year month day
    expect(testInfo.mercuryExpectancy(6.2)).toEqual(`You still have 0.9999999999999991 years till you reach your life expectancy of 7.199999999999999 year/s`);
  });

  it("should calculate venus expectancy", function () {
    let testInfo = new Birthday(1992, 11, 11, 30);    // year month day
    expect(testInfo.venusExpectancy(16.1)).toEqual(`You still have 2.5 years till you reach your life expectancy of 18.6 year/s`);
  });

  it("should calculate mars expectancy", function () {
    let testInfo = new Birthday(1992, 11, 11, 30);    // year month day
    expect(testInfo.marsExpectancy(48.9)).toEqual(`You still have 7.5 years till you reach your life expectancy of 56.4 year/s`);
  });

  it("should calculate jupiter expectancy", function () {
    let testInfo = new Birthday(1992, 11, 11, 30);    // year month day
    expect(testInfo.jupiterExpectancy(308.4)).toEqual(`You still have 47.39999999999998 years till you reach your life expectancy of 355.79999999999995 year/s`);
  });
  
});