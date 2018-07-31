import { RecommdationReqModule } from './requestrecomm.module';

describe('RecommdationReqModule', () => {
    let chartsModule: RecommdationReqModule;

    beforeEach(() => {
        chartsModule = new RecommdationReqModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
