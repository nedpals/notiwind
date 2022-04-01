import { App } from 'vue';
import { notify } from './notify';
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $notify: typeof notify;
    }
}
export declare function install(app: App): void;
