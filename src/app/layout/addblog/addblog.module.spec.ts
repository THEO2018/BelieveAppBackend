import { AddBlogModule } from './addblog.module';

describe('AddBlogModule', () => {
    let chartsModule: AddBlogModule;

    beforeEach(() => {
        chartsModule = new AddBlogModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
