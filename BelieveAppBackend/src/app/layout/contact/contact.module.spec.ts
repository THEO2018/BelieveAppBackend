import { ContactModule } from './contact.module';

describe('ContactModule', () => {
    let chartsModule: ContactModule;

    beforeEach(() => {
        chartsModule = new ContactModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
