import Doctor from '../src/doctor';

describe('Doctor', function () {

  // TESTS FOR AGES
  
  it("should calculate age", function () {
    let testInfo = new Doctor(1992, 11, 11);    // year month day
    expect(testInfo.calcAge()).toEqual(26);
  });
  
});