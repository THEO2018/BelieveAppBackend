import { GivingModule } from './giving.module';

describe('BlogModule', () => {
    let chartsModule: GivingModule;

    beforeEach(() => {
        chartsModule = new GivingModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
