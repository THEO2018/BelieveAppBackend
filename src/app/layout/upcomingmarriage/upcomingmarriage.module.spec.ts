import { UpcomingModule } from './upcomingmarriage.module';

describe('UpcomingModule', () => {
    let chartsModule: UpcomingModule;

    beforeEach(() => {
        chartsModule = new UpcomingModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
