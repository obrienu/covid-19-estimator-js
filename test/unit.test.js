import {
  currentlyInfected,
  projectedInfected,
  severeCases,
  availableBed
} from '../src/utils/utils';

describe('Test the currentlyInfected function', () => {
  test('Should return correct result', () => {
    expect(currentlyInfected(10)).toMatchObject({
      impact: 100,
      severeImpact: 500
    });
  });
});

describe('Test projectedInfected function', () => {
  test('Should return correct result', () => {
    expect(projectedInfected(220, 0, 'days')).toBe(220);
    expect(projectedInfected(220, 28, 'days')).toBe(112640);
    expect(projectedInfected(220, 1, 'weeks')).toBe(880);
    expect(projectedInfected(220, 2, 'months')).toBe(230686720);
    expect(projectedInfected(220, 30, 'days')).toBe(projectedInfected(220, 1, 'months'));
  });
});

describe('Test severeCase function', () => {
  test('Should return correct result', () => {
    expect(severeCases(220)).toBe(33);
    expect(severeCases(1500)).toBe(225);
    expect(severeCases(0)).toBe(0);
  });
});


describe('Test availabeBed function', () => {
  test('Should return correct result', () => {
    expect(availableBed(150, 200)).toBe(-80);
    expect(availableBed(200, 200)).toBe(-130);
    expect(availableBed(100, 500)).toBe(175);
  });
});
