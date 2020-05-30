import CreateNotificationDTO from '@modules/notifications/dtos/CreateNotificationDTO';
import INotificationsRepository from '../INotificationsRepository';
import Notification from '../../infra/typeorm/schemas/Notification';

export default class FakeNotificationsRepository
  implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    recipient_id,
    content,
  }: CreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { recipient_id, content });

    this.notifications.push(notification);

    return notification;
  }
}
