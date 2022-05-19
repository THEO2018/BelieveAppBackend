import { PollDetailModule } from './poll-detail.module';

describe('PollDetailModule', () => {
    let pollDetailModule: PollDetailModule;

    beforeEach(() => {
        pollDetailModule = new PollDetailModule();
    });

    it('should create an instance', () => {
        expect(pollDetailModule).toBeTruthy();
    });
});
