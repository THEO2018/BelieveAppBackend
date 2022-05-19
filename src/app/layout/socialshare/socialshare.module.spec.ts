import { SocialshareModule } from './socialshare.module';

describe('BlogModule', () => {
    let chartsModule: SocialshareModule;

    beforeEach(() => {
        chartsModule = new SocialshareModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
