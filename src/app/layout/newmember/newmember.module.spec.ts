import { NewmemberModule } from './newmember.module';

describe('NewmemberModule', () => {
    let chartsModule: NewmemberModule;

    beforeEach(() => {
        chartsModule = new NewmemberModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
