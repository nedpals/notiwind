import { events } from './events'

export interface NotificationItem {
  id?: number,
  title?: string,
  text: string,
  type: string,
  group?: string,
  speed?: number,
  data?: any,
  clean?: boolean
}

let count = 0

const generateId = () => {
  return count++
}

export const notify = (notification: NotificationItem, timeout: number): number => {
  if (!notification.id) {
    notification.id = generateId()
  }
  notification.group = notification.group || ''
  events.emit('notify', { notification, timeout })
  return notification.id
}
