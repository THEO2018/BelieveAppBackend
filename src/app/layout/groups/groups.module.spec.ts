import { GroupssModule } from './groups.module';

describe('GroupssModule', () => {
    let chartsModule: GroupssModule;

    beforeEach(() => {
        chartsModule = new GroupssModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
