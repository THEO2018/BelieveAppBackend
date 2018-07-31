import { UsersModule } from './users.module';

describe('UsersModule', () => {
    let chartsModule: UsersModule;

    beforeEach(() => {
        chartsModule = new UsersModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
