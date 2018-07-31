import { AppointrequestModule } from './appointrequest.module';

describe('AppointrequestModule', () => {
    let chartsModule: AppointrequestModule;

    beforeEach(() => {
        chartsModule = new AppointrequestModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
