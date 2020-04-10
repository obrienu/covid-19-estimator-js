import {
  currentlyInfected,
  projectedInfected,
  severeCases,
  availableBed,
  caseForICUAndVentilators,
  estimatedLoseInIncome
} from '../src/utils/utils';


describe('Test the currentlyInfected function', () => {
  test('Should return correct result', () => {
    expect(currentlyInfected(10, 200)).toMatchObject({
      impact: 100,
      severeImpact: 200
    });
  });
});

describe('Test projectedInfected function', () => {
  test('Should return correct result', () => {
    expect(projectedInfected(220, 0, 'days', 30000000)).toStrictEqual(220);
    expect(projectedInfected(220, 28, 'days', 30000000)).toStrictEqual(112640);
    expect(projectedInfected(220, 1, 'weeks', 30000000)).toStrictEqual(880);
    expect(projectedInfected(220, 2, 'months', 30000000)).toStrictEqual(30000000);
    expect(projectedInfected(220, 30, 'days', 30000000)).toStrictEqual(projectedInfected(220, 1, 'months'));
  });
});

describe('Test severeCase function', () => {
  test('Should return correct result', () => {
    expect(severeCases(220)).toStrictEqual(33);
    expect(severeCases(1500)).toStrictEqual(225);
    expect(severeCases(0)).toStrictEqual(0);
  });
});


describe('Test availabeBed function', () => {
  test('Should return correct result', () => {
    expect(availableBed(150, 200)).toStrictEqual(-80);
    expect(availableBed(200, 200)).toStrictEqual(-130);
    expect(availableBed(100, 500)).toStrictEqual(175);
  });
});

describe('Test caseForICUAndVentilators function', () => {
  test('Should return correct result', () => {
    expect(caseForICUAndVentilators(2000)).toMatchObject({
      ICUCases: 100,
      ventilatorsCases: 40
    });
    expect(caseForICUAndVentilators(2000)).toHaveProperty('ICUCases');
    expect(caseForICUAndVentilators(300000)).toHaveProperty('ventilatorsCases');
  });
});

describe('Test estimatedLoseInIncome function', () => {
  test('Should return correct result', () => {
    const dollarsInFlight = estimatedLoseInIncome(100, 1, 'week', 1.5, 0.75);
    const dollarsInFlight1 = estimatedLoseInIncome(2000000, 5, 'weeks', 1.5, 0.75);

    expect(dollarsInFlight).toStrictEqual(787);
    expect(dollarsInFlight1).toStrictEqual(78750000);
  });
});
