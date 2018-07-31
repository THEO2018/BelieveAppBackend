import { AppointmentModule } from './appointment.module';

describe('AppointmentModule', () => {
    let chartsModule: AppointmentModule;

    beforeEach(() => {
        chartsModule = new AppointmentModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
