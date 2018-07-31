import { SmallGroupsModule } from './smallgroup.module';

describe('SmallGroupsModule', () => {
    let chartsModule: SmallGroupsModule;

    beforeEach(() => {
        chartsModule = new SmallGroupsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
