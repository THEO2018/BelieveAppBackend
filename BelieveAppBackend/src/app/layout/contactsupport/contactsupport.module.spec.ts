import { ContactsupportModule } from './contactsupport.module';

describe('ContactsupportModule', () => {
    let chartsModule: ContactsupportModule;

    beforeEach(() => {
        chartsModule = new ContactsupportModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
