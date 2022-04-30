import { defineComponent, InjectionKey, provide } from "@vue/runtime-core"

export const contextKey = Symbol() as InjectionKey<{ group: string, position: string }>;

export default defineComponent({
  props: {
    group: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'top',
      validator: function(this: void, value: string) {
        return ['top', 'bottom'].includes(value)
      },
    },
  },
  setup(props) {
    provide(contextKey, {
      group: props.group,
      position: props.position
    });
  },
  render() {
    return this.$slots.default?.({
      group: this.group,
    })
  },
})