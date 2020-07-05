import { injectable, inject } from 'tsyringe';
import { getDaysInMonth, getDate, isAfter } from 'date-fns';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface RequestDto {
  provider_id: string;
  month: number;
  year: number;
}

type ResponseDto = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
export default class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
  }: RequestDto): Promise<ResponseDto> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
      {
        provider_id,
        year,
        month,
      },
    );

    const numberOfDays = getDaysInMonth(new Date(year, month - 1));

    const eachDayArray = Array.from(
      { length: numberOfDays },
      (_, index) => index + 1,
    );

    const currentDate = new Date(Date.now());

    const availability = eachDayArray.map(day => {
      const appointmentsDay = appointments.filter(
        appointment => getDate(appointment.date) === day,
      );

      const compareDate = new Date(year, month - 1, day, 23, 59, 59);

      return {
        day,
        available:
          appointmentsDay.length < 10 && isAfter(compareDate, currentDate),
      };
    });

    return availability;
  }
}
