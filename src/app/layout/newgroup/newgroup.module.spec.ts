import { NewGroupssModule } from './newgroup.module';

describe('NewGroupssModule', () => {
    let chartsModule: NewGroupssModule;

    beforeEach(() => {
        chartsModule = new NewGroupssModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
