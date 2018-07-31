import { NewsModule } from './news.module';

describe('NewsModule', () => {
    let chartsModule: NewsModule;

    beforeEach(() => {
        chartsModule = new NewsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
