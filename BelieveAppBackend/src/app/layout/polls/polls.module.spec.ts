import { PollsModule } from './polls.module';

describe('PollsModule', () => {
    let chartsModule: PollsModule;

    beforeEach(() => {
        chartsModule = new PollsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
