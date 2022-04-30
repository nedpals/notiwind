import { events } from './events'

export const DEFAULT_TIMEOUT = 3000

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

export function notify<T>(notification: NotificationItem<T>, timeout?: number): { id: number, close: () => void } {
  if (!notification.id) {
    notification.id = generateId()
  }
  notification.group = notification.group || ''
  events.emit('notify', { notification, timeout: timeout ?? DEFAULT_TIMEOUT })
  return {
    id: notification.id,
    close: () => events.emit('closeNotification', { id: notification.id! })
  }
}
