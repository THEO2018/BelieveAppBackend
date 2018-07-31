import { OnlinestoreModule } from './onlinestore.module';

describe('OnlinestoreModule', () => {
    let chartsModule: OnlinestoreModule;

    beforeEach(() => {
        chartsModule = new OnlinestoreModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
