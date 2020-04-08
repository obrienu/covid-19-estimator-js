const currentlyInfected = (reportedCases) => {
  try {
    const obj = {};
    if (typeof reportedCases !== 'number') {
      throw new Error('Reported cases must be a number');
    } else {
      obj.impact = reportedCases * 10;
      obj.severeImpact = reportedCases * 50;
      return obj;
    }
  } catch (err) {
    return err;
  }
};

const projectedInfected = (infected, timeToElapse, periodType) => {
  try {
    if (timeToElapse === 0) return infected;
    let period;
    switch (periodType) {
      case 'days':
        period = timeToElapse;
        break;
      case 'week':
      case 'weeks':
        period = timeToElapse * 7;
        break;
      case 'month':
      case 'months':
        period = timeToElapse * 30;
        break;
      default:
        throw new Error('period Type should either be days, weeks, or months');
    }
    const factor = Math.floor(period / 3);
    return infected * (2 ** factor);
  } catch (err) {
    return err.message;
  }
};

const severeCases = (numOfEstInfections) => {
  const PERCENT = 15 / 100;
  return Math.floor(numOfEstInfections * PERCENT);
};

const availableBed = (severeCasesByRequestedTime, totalHospitalBeds) => {
  const PERCENT = 35 / 100;
  const bedsAvailable = Math.floor(totalHospitalBeds * PERCENT);
  return bedsAvailable > severeCasesByRequestedTime
    ? bedsAvailable : bedsAvailable - severeCasesByRequestedTime;
};

module.exports = {
  severeCases,
  projectedInfected,
  currentlyInfected,
  availableBed
};
