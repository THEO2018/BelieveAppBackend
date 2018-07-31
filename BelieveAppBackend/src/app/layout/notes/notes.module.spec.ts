import { NotesModule } from './notes.module';

describe('NotesModule', () => {
    let chartsModule: NotesModule;

    beforeEach(() => {
        chartsModule = new NotesModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
