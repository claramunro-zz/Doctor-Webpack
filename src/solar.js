export default class Birthday {
  constructor(year, month, day, expectancy) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.expectancy = expectancy;
  }

  // calculate earthage
  calcAge() {
    let today = new Date();
    let birthdaydate = new Date(this.year, this.month, this.day);
    let earthAge = (today - birthdaydate);
    earthAge = Math.floor(earthAge / 3.154e+10);  // miliseconds peryear
    return earthAge;
  }

  mercuryAge(age) {
    age *= .24;
    return age.toFixed(1);
  }

  venusAge(age) {
    age *= .62;
    return age.toFixed(1);
  }

  marsAge(age) {
    age *= 1.88;
    return age.toFixed(1);
  }

  jupiterAge(age) {
    age *= 11.86;
    return age.toFixed(1);
  }

  earthExpectancy(age) {
    let yearsLeft = this.expectancy - age;
    if (yearsLeft < 0) {
      let absNum = Math.abs(yearsLeft);
      return `You've lived ${absNum} year/s past your life expectancy of ${this.expectancy} year/s`;
    }
    return `You still have ${yearsLeft} years till you reach your life expectancy of ${this.expectancy} year/s`;
  }

  mercuryExpectancy(mercuryAge) {
    let mercuryYearsLeft = this.expectancy * .24;
    let yearsLeft = mercuryYearsLeft - mercuryAge;
    if (yearsLeft < 0) {
      let absNum = Math.abs(yearsLeft);
      return `You've lived ${absNum} year/s past your life expectancy of ${mercuryYearsLeft} year/s`;
    }
    return `You still have ${yearsLeft} years till you reach your life expectancy of ${mercuryYearsLeft} year/s`;
  }

  venusExpectancy(venusAge) {
    let venusYearsLeft = this.expectancy * .62;
    let yearsLeft = venusYearsLeft - venusAge;
    if (yearsLeft < 0) {
      let absNum = Math.abs(yearsLeft);
      return `You've lived ${absNum} year/s past your life expectancy of ${venusYearsLeft} year/s`;
    }
    return `You still have ${yearsLeft} years till you reach your life expectancy of ${venusYearsLeft} year/s`;
  }

  marsExpectancy(marsAge) {
    let marsYearsLeft = this.expectancy * 1.88;
    let yearsLeft = marsYearsLeft - marsAge;
    if (yearsLeft < 0) {
      let absNum = Math.abs(yearsLeft);
      return `You've lived ${absNum} year/s past your life expectancy of ${marsYearsLeft} year/s`;
    }
    return `You still have ${yearsLeft} years till you reach your life expectancy of ${marsYearsLeft} year/s`;
  }

  jupiterExpectancy(jupiterAge) {
    let jupiterYearsLeft = this.expectancy * 11.86;
    let yearsLeft = jupiterYearsLeft - jupiterAge;
    if (yearsLeft < 0) {
      let absNum = Math.abs(yearsLeft);
      return `You've lived ${absNum} year/s past your life expectancy of ${jupiterYearsLeft} year/s`;
    }
    return `You still have ${yearsLeft} years till you reach your life expectancy of ${jupiterYearsLeft} year/s`;
  }

}



   