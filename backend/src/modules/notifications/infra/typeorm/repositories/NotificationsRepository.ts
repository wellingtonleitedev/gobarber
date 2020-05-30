import { getMongoRepository, MongoRepository } from 'typeorm';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import CreateNotificationDTO from '@modules/notifications/dtos/CreateNotificationDTO';
import Notification from '../schemas/Notification';

export default class NotificationsRepository
  implements INotificationsRepository {
  private odmRepository: MongoRepository<Notification>;

  constructor() {
    this.odmRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    recipient_id,
    content,
  }: CreateNotificationDTO): Promise<Notification> {
    const notification = this.odmRepository.create({
      recipient_id,
      content,
    });

    await this.odmRepository.save(notification);

    return notification;
  }
}
