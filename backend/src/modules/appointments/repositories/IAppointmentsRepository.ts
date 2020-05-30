import Appointment from '../infra/typeorm/entities/Appointment';
import CreateAppointmentDTO from '../dtos/CreateAppointmentDTO';
import FindAllInMonthFromProviderDTO from '../dtos/findAllInMonthFromProviderDTO';
import FindAllInDayFromProviderDTO from '../dtos/findAllInDayFromProviderDTO';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: FindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: FindAllInDayFromProviderDTO,
  ): Promise<Appointment[]>;
  create(data: CreateAppointmentDTO): Promise<Appointment | undefined>;
}
