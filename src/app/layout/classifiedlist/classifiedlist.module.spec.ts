import { ClassifiedlistModule } from './classifiedlist.module';

describe('ClassifiedlistModule', () => {
    let chartsModule: ClassifiedlistModule;

    beforeEach(() => {
        chartsModule = new ClassifiedlistModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
