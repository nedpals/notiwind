import { events } from './events'

export interface NotificationItem<T> {
  id?: number,
  title?: string,
  text: string,
  type: string,
  group?: string,
  speed?: number,
  data?: T,
  clean?: boolean
}

let count = 0

const generateId = () => {
  return count++
}

export function notify<T>(notification: NotificationItem<T>, timeout: number): number {
  if (!notification.id) {
    notification.id = generateId()
  }
  notification.group = notification.group || ''
  events.emit('notify', { notification, timeout })
  return notification.id
}
