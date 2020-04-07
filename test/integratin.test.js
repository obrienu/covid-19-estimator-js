import { currentlyInfected, projectedInfected } from '../src/utils/utils';


describe('Integrate currentlyInfected into projectedInfected', () => {
  test('Projection for 1 week with 10 reported case return impact of 400 and sever impact of 2000', () => {
    const projectedImpact = projectedInfected(currentlyInfected(10).impact, 1, 'week');
    const projectedSeverImpact = projectedInfected(currentlyInfected(10).severeImpact, 1, 'week');
    expect(projectedImpact).toBe(400);
    expect(projectedSeverImpact).toBe(2000);
  });
});
