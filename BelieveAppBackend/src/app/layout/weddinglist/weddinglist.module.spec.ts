import { WeddingModule } from './weddinglist.module';

describe('WeddingModule', () => {
    let chartsModule: WeddingModule;

    beforeEach(() => {
        chartsModule = new WeddingModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
