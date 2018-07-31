import { EditBlogModule } from './editblog.module';

describe('EditBlogModule', () => {
    let chartsModule: EditBlogModule;

    beforeEach(() => {
        chartsModule = new EditBlogModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
