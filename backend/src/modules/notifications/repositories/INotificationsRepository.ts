import Notification from '../infra/typeorm/schemas/Notification';
import CreateNotificationDTO from '../dtos/CreateNotificationDTO';

export default interface INotificationsRepository {
  create(data: CreateNotificationDTO): Promise<Notification>;
}
