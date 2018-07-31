import { BirthdayModule } from './birthday.module';

describe('BirthdayModule', () => {
    let chartsModule: BirthdayModule;

    beforeEach(() => {
        chartsModule = new BirthdayModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
