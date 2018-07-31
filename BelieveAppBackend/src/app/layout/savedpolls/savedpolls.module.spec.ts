import { SavedpollsModule } from './savedpolls.module';

describe('BlankPageModule', () => {
    let addPollModule: SavedpollsModule;

    beforeEach(() => {
        addPollModule = new SavedpollsModule();
    });

    it('should create an instance', () => {
        expect(addPollModule).toBeTruthy();
    });
});
