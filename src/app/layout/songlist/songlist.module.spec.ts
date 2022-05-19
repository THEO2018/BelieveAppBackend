import { SonglistModule } from './songlist.module';

describe('SonglistModule', () => {
    let chartsModule: SonglistModule;

    beforeEach(() => {
        chartsModule = new SonglistModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
