import { NewEventsModule } from './newevent.module';

describe('NewEventsModule', () => {
    let chartsModule: NewEventsModule;

    beforeEach(() => {
        chartsModule = new NewEventsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
