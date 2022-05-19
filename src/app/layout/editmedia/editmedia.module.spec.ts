import { EditmediaModule } from './editmedia.module';

describe('EditmediaModule', () => {
    let chartsModule: EditmediaModule;

    beforeEach(() => {
        chartsModule = new EditmediaModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
