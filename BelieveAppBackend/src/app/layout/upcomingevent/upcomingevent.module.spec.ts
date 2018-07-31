import { UpcomingEventModule } from './upcomingevent.module';

describe('UpcomingEventModule', () => {
    let chartsModule: UpcomingEventModule;

    beforeEach(() => {
        chartsModule = new UpcomingEventModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
