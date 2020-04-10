import {
  currentlyInfected,
  projectedInfected,
  severeCases,
  availableBed,
  impactEstimator,
  severImpactEstimator
} from '../src/utils/utils';

import covid19ImpactEstimator from '../src/estimator';

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

describe('Integrate currentlyInfected into projectedInfected', () => {
  test('Projection for 1 week with 10 reported case return impact of 400 and sever impact of 2000', () => {
    const projectedImpact = projectedInfected(currentlyInfected(10).impact, 1, 'week', 3000490955);
    const projectedSeverImpact = projectedInfected(currentlyInfected(10).severeImpact, 1, 'week', 3000490955);
    expect(projectedImpact).toBe(400);
    expect(projectedSeverImpact).toBe(2000);
  });
});

describe('Integrate severeCase into availableBed', () => {
  test('Projection for 500 projectedCases with available bedspace of 200', () => {
    const bedSpace = availableBed(severeCases(500), 200);
    expect(bedSpace).toBe(-5);
  });
});

describe('Integration test for impactEstimator function ', () => {
  test('Impact projection for 674 reported cases', () => {
    const severeImpact = severImpactEstimator(data);
    expect(severeImpact).toHaveProperty('casesForICUByRequestedTime', 3331135);
    expect(severeImpact).toHaveProperty('casesForVentilatorsByRequestedTime', 1332454);
    expect(severeImpact).toHaveProperty('currentlyInfected', 33700);
    expect(severeImpact).toHaveProperty('dollarsInFlight', 13717614959);
    expect(severeImpact).toHaveProperty('hospitalBedsByRequestedTime', -9510191);
    expect(severeImpact).toHaveProperty('infectionsByRequestedTime', 66622705);
  });
});

describe('Integration test for impactEstimator function ', () => {
  test('Impact projection for 674 reported cases', () => {
    const impact = impactEstimator(data);
    expect(impact).toHaveProperty('casesForICUByRequestedTime', 3331135);
    expect(impact).toHaveProperty('casesForVentilatorsByRequestedTime', 1332454);
    expect(impact).toHaveProperty('currentlyInfected', 6740);
    expect(impact).toHaveProperty('dollarsInFlight', 13717614959);
    expect(impact).toHaveProperty('hospitalBedsByRequestedTime', -9510191);
    expect(impact).toHaveProperty('infectionsByRequestedTime', 66622705);
  });
});

describe('Integration test for covid19ImpactEstimator function ', () => {
  test('Impact covid19ImpactEstimator for 674 reported cases', () => {
    const impact = covid19ImpactEstimator(data);
    expect(impact).toHaveProperty('data');
    expect(impact).toHaveProperty('impact');
    expect(impact).toHaveProperty('severeImpact');
  });
});
