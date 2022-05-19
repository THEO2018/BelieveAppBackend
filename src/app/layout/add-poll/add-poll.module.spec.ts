import { AddPollModule } from './add-poll.module';

describe('BlankPageModule', () => {
    let addPollModule: AddPollModule;

    beforeEach(() => {
        addPollModule = new AddPollModule();
    });

    it('should create an instance', () => {
        expect(addPollModule).toBeTruthy();
    });
});
