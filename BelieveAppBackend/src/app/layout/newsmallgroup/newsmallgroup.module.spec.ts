import { NewSmallGroupsModule } from './newsmallgroup.module';

describe('NewSmallGroupsModule', () => {
    let chartsModule: NewSmallGroupsModule;

    beforeEach(() => {
        chartsModule = new NewSmallGroupsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
