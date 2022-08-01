const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('', () => {
    expect(getOpeningHours()).toEqual(({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    }));
  });

  it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(('The zoo is closed'));
  });

  it('', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(('The zoo is open'));
  });

  it('', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });

  it('', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });

  it('', () => {
    expect(() => {
      getOpeningHours('Thu', '13:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });

  it('', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });
  it('', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
