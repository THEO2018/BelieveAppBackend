import { EditGroupModule } from './editgroup.module';

describe('EditGroupModule', () => {
    let chartsModule: EditGroupModule;

    beforeEach(() => {
        chartsModule = new EditGroupModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
