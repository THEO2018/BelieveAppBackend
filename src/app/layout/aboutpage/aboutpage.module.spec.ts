import { AboutpageModule } from './aboutpage.module';

describe('AboutpageModule', () => {
    let chartsModule: AboutpageModule;

    beforeEach(() => {
        chartsModule = new AboutpageModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
