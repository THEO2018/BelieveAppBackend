import { MusicsModule } from './music.module';

describe('MusicsModule', () => {
    let chartsModule: MusicsModule;

    beforeEach(() => {
        chartsModule = new MusicsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
