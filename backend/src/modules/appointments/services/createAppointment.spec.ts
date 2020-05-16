import AppError from '@shared/errors/appError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './createAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: 'a1e33f28-a719-4d53-9cd6-6a981320ac3e',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment?.provider_id).toBe(
      'a1e33f28-a719-4d53-9cd6-6a981320ac3e',
    );
  });

  it('should not be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointmentDate = new Date(2020, 5, 10, 11);

    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: 'a1e33f28-a719-4d53-9cd6-6a981320ac3e',
    });

    expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: 'a1e33f28-a719-4d53-9cd6-6a981320ac3e',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
