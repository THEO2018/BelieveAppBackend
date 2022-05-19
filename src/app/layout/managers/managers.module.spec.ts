import { ManagersModule } from './groups.module';

describe('GroupssModule', () => {
    let managersModule: ManagersModule;

    beforeEach(() => {
        managersModule = new ManagersModule();
    });

    it('should create an instance', () => {
        expect(managersModule).toBeTruthy();
    });
});
