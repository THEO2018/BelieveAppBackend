import { LibraryModule } from './library.module';

describe('LibraryModule', () => {
    let chartsModule: LibraryModule;

    beforeEach(() => {
        chartsModule = new LibraryModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
