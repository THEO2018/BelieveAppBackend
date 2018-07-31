import { MedialistModule } from './medialist.module';

describe('MedialistModule', () => {
    let chartsModule: MedialistModule;

    beforeEach(() => {
        chartsModule = new MedialistModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
