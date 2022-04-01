import { type notify } from './notify'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notify: typeof notify
  }
}
