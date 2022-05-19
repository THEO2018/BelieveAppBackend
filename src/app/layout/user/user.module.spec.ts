import { UserModule } from './user.module';

describe('UserModule', () => {
    let chartsModule: UserModule;

    beforeEach(() => {
        chartsModule = new UserModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
