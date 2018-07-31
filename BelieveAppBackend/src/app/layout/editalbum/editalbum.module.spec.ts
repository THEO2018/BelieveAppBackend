import { EditalbumModule } from './editalbum.module';

describe('EditalbumModule', () => {
    let chartsModule: EditalbumModule;

    beforeEach(() => {
        chartsModule = new EditalbumModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
