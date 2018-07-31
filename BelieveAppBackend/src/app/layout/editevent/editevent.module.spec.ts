import { EditeventModule } from './editevent.module';

describe('EditeventModule', () => {
    let chartsModule: EditeventModule;

    beforeEach(() => {
        chartsModule = new EditeventModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
