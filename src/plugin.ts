/* eslint-disable vue/component-definition-name-casing */

import { App } from 'vue'

import Notification from './components/Notification'
import NotificationGroup from './components/NotificationGroup'
import { notify } from './notify'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notify: typeof notify
  }
}

export function install(app: App) {
  app.config.globalProperties.$notify = notify
  app.component('Notification', Notification)
  app.component('NotificationGroup', NotificationGroup)

  // Compatibility with the old component names
  app.component('notification', Notification)
  app.component('notificationGroup', NotificationGroup)
}
