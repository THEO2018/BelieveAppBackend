import { GrouprequestModule } from './grouprequest.module';

describe('GrouprequestModule', () => {
    let chartsModule: GrouprequestModule;

    beforeEach(() => {
        chartsModule = new GrouprequestModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
