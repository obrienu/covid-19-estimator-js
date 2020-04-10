const {
  severImpactEstimator,
  impactEstimator
} = require('./utils/utils');

const covid19ImpactEstimator = (data) => {
  const severeImpact = severImpactEstimator(data);
  const impact = impactEstimator(data);
  return ({
    data,
    impact,
    severeImpact
  });
};
export default covid19ImpactEstimator;
