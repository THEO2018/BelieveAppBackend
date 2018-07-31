import { MarriageGroupModule } from './marriage.module';

describe('MarriageGroupModule', () => {
    let chartsModule: MarriageGroupModule;

    beforeEach(() => {
        chartsModule = new MarriageGroupModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
