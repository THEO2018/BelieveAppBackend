import { RecommdationModule } from './classifieds.module';

describe('RecommdationModule', () => {
    let chartsModule: RecommdationModule;

    beforeEach(() => {
        chartsModule = new RecommdationModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
