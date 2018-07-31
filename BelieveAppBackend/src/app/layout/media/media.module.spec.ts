import { MediaModule } from './media.module';

describe('MediaModule', () => {
    let chartsModule: MediaModule;

    beforeEach(() => {
        chartsModule = new MediaModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
