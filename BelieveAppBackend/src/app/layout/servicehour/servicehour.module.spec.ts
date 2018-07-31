import { ServicehourModule } from './servicehour.module';

describe('ServicehourModule', () => {
    let chartsModule: ServicehourModule;

    beforeEach(() => {
        chartsModule = new ServicehourModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
