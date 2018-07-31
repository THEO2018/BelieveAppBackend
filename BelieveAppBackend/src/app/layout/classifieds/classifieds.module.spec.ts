import { ClassifiedModule } from './classifieds.module';

describe('ClassifiedModule', () => {
    let chartsModule: ClassifiedModule;

    beforeEach(() => {
        chartsModule = new ClassifiedModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
