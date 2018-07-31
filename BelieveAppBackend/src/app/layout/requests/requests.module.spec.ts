import { RequestsModule } from './requests.module';

describe('RequestsModule', () => {
    let chartsModule: RequestsModule;

    beforeEach(() => {
        chartsModule = new RequestsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
