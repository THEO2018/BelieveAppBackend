import { PopupModule } from './popup.module';

describe('PopupModule', () => {
    let chartsModule: PopupModule;

    beforeEach(() => {
        chartsModule = new PopupModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
