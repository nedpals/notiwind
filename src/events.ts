import mitt, { Emitter } from 'mitt'
import { NotificationItem } from './notify'

type Events = {
  notify: {
    notification: NotificationItem<any>,
    timeout: number
  }
}

export const events: Emitter<Events> = mitt<Events>()