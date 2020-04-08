const { currentlyInfected, projectedInfected, severeCases, availableBed } = require('./utils/utils');

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

const impactEstimator = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds,
    region: {
      name,
      avgAge,
      avgDailyIncomeInUSD,
      avgDailyIncomePopulation,
    }
  } = data;

  const { impact: currentlyInfectedPersons } = currentlyInfected(reportedCases);
  const infectionsByRequestedTime = projectedInfected(currentlyInfectedPersons,
    timeToElapse, periodType);
  const severeCasesByRequestedTime = severeCases(infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = availableBed(severeCasesByRequestedTime,
    totalHospitalBeds);
  console.log({
    currentlyInfected: currentlyInfectedPersons,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  });
};

const severImpactEstimator = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds,
    region: {
      name,
      avgAge,
      avgDailyIncomeInUSD,
      avgDailyIncomePopulation,
    }
  } = data;
  const { severeImpact: currentlyInfectedPersons } = currentlyInfected(reportedCases);
  const infectionsByRequestedTime = projectedInfected(currentlyInfectedPersons,
    timeToElapse, periodType);
  const severeCasesByRequestedTime = severeCases(infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = availableBed(severeCasesByRequestedTime,
    totalHospitalBeds);

  console.log({
    currentlyInfected: currentlyInfectedPersons,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  });
};


const covid19ImpactEstimator = (data) => {
  severImpactEstimator(data);
  impactEstimator(data);
};

covid19ImpactEstimator(data);

// export default covid19ImpactEstimator;
