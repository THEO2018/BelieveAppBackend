import { EventssModule } from './events.module';

describe('EventssModule', () => {
    let chartsModule: EventssModule;

    beforeEach(() => {
        chartsModule = new EventssModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
