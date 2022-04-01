import { Emitter } from 'mitt';
import { NotificationItem } from './notify';
declare type Events = {
    notify: {
        notification: NotificationItem<any>;
        timeout: number;
    };
};
export declare const events: Emitter<Events>;
export {};
