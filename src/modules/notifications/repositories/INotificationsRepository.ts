import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notifications';

export default interface INotificationRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
