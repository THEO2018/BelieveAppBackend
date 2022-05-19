import { BlogModule } from './blog.module';

describe('BlogModule', () => {
    let chartsModule: BlogModule;

    beforeEach(() => {
        chartsModule = new BlogModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
