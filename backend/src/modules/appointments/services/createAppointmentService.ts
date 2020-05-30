import { startOfHour, isBefore, getHours, format } from 'date-fns';

import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface RequestDto {
  provider_id: string;
  user_id: string;
  date: Date;
}

@injectable()
export default class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({
    provider_id,
    user_id,
    date,
  }: RequestDto): Promise<Appointment | undefined> {
    const appointmentDate = startOfHour(date);

    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError("Can't create an appointment in a past date");
    }

    if (user_id === provider_id) {
      throw new AppError("Can't create an appointment with yourself");
    }

    if (getHours(date) < 8 || getHours(date) > 17) {
      throw new AppError(
        'You just can create an appointment between 8am and 5pm',
      );
    }

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: appointmentDate,
    });

    const formatedDate = format(appointmentDate, "dd/MM/yyyy 'às' HH'h'");

    await this.notificationsRepository.create({
      recipient_id: user_id,
      content: `agendamento para o dia ${formatedDate}`,
    });

    return appointment;
  }
}
