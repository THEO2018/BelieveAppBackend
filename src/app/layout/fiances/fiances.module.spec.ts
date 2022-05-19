import { FiancesModule } from './fiances.module';

describe('FiancesModule', () => {
    let chartsModule: FiancesModule;

    beforeEach(() => {
        chartsModule = new FiancesModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
