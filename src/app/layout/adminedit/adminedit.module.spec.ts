import { AdminEditModule } from './adminedit.module';

describe('AdminEditModule', () => {
    let adminEditModule: AdminEditModule;

    beforeEach(() => {
        adminEditModule = new AdminEditModule();
    });

    it('should create an instance', () => {
        expect(AdminEditModule).toBeTruthy();
    });
});
