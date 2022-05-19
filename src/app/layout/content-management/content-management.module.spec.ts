import { ContentModule } from './content-management.module';

describe('ContentModule', () => {
    let chartsModule: ContentModule;

    beforeEach(() => {
        chartsModule = new ContentModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
