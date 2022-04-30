import { h, defineComponent, inject, ref, computed, TransitionGroup } from 'vue'
import { events } from '../events'
import { NotificationItem } from '../notify'
import { contextKey } from './NotificationGroup'

export default defineComponent({
  props: {
    maxNotifications: {
      type: Number,
      default: 10,
    },
    enter: {
      type: String,
      default: ''
    },
    enterFrom: {
      type: String,
      default: ''
    },
    enterTo: {
      type: String,
      default: ''
    },
    leave: {
      type: String,
      default: ''
    },
    leaveFrom: {
      type: String,
      default: ''
    },
    leaveTo: {
      type: String,
      default: ''
    },
    move: {
      type: String,
      default: ''
    },
    moveDelay: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const context = inject(contextKey, { group: '', position: 'top' })
    const notifications = ref<NotificationItem<any>[]>([])
    const notificationsByGroup = computed<NotificationItem<any>[]>(() => notifications.value.filter((n) => n.group === context.group))
    const sortedNotifications = computed(() => {
      if (context.position === 'bottom') {
        return [...notificationsByGroup.value]
          .slice(0, props.maxNotifications)
      }

      // if not bottom reverse the array
      return [...notificationsByGroup.value]
        .reverse()
        .slice(0, props.maxNotifications)
    })

    const add = <T>({ notification, timeout }: { notification: NotificationItem<T>, timeout: number }) => {
      notifications.value.push(notification)
      if (timeout !== Infinity) {
        setTimeout(() => {
          close(notification.id!)
        }, timeout);
      }
    };

    const close = (id: number) => {
      events.emit('closeNotification', { id })
    }

    const handleClose = ({ id }: { id: number }) => {
      emit('close', id)
      remove(id)
    }

    const remove = (id: number) => {
      notifications.value.splice(notifications.value.findIndex(n => n.id === id), 1)
    }

    return {
      context,
      notifications,
      sortedNotifications,
      notificationsByGroup,
      add,
      close,
      remove,
      handleClose
    }
  },
  mounted() {
    events.on('notify', this.add)
    events.on('closeNotification', this.handleClose)
  },
  beforeUnmount() {
    events.off('notify', this.add)
    events.off('closeNotification', this.handleClose)
  },
  render() {
    return h(
      TransitionGroup,
      {
        'enter-active-class':
          this.notificationsByGroup.length > 1
            ? [this.enter, this.moveDelay].join(' ')
            : this.enter,
        'enter-from-class': this.enterFrom,
        'enter-to-class': this.enterTo,
        'leave-active-class': this.leave,
        'leave-from-class': this.leaveFrom,
        'leave-to-class': this.leaveTo,
        'move-class': this.move,
      },
      {
        default: () => {
          return this.$slots.default?.({
            notifications: this.sortedNotifications,
            close: this.close,
          })
        }
      }
    )
  },
})