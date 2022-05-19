import { NewlinkModule } from './newlink.module';

describe('NewlinkModule', () => {
    let chartsModule: NewlinkModule;

    beforeEach(() => {
        chartsModule = new NewlinkModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
