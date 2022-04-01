import { NotificationItem } from '../notify';
declare const _default: import("vue").DefineComponent<{
    maxNotifications: {
        type: NumberConstructor;
        default: number;
    };
    enter: {
        type: StringConstructor;
        default: string;
    };
    enterFrom: {
        type: StringConstructor;
        default: string;
    };
    enterTo: {
        type: StringConstructor;
        default: string;
    };
    leave: {
        type: StringConstructor;
        default: string;
    };
    leaveFrom: {
        type: StringConstructor;
        default: string;
    };
    leaveTo: {
        type: StringConstructor;
        default: string;
    };
    move: {
        type: StringConstructor;
        default: string;
    };
    moveDelay: {
        type: StringConstructor;
        default: string;
    };
}, {
    context: {
        group: string;
        position: string;
    };
    notifications: import("vue").Ref<{
        id?: number | undefined;
        title?: string | undefined;
        text: string;
        type: string;
        group?: string | undefined;
        speed?: number | undefined;
        data?: any;
        clean?: boolean | undefined;
    }[]>;
    sortedNotifications: import("vue").ComputedRef<NotificationItem[]>;
    notificationsByGroup: import("vue").ComputedRef<NotificationItem[]>;
    add: ({ notification, timeout }: {
        notification: NotificationItem;
        timeout: number;
    }) => void;
    close: (id: number) => void;
    remove: (id: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxNotifications: {
        type: NumberConstructor;
        default: number;
    };
    enter: {
        type: StringConstructor;
        default: string;
    };
    enterFrom: {
        type: StringConstructor;
        default: string;
    };
    enterTo: {
        type: StringConstructor;
        default: string;
    };
    leave: {
        type: StringConstructor;
        default: string;
    };
    leaveFrom: {
        type: StringConstructor;
        default: string;
    };
    leaveTo: {
        type: StringConstructor;
        default: string;
    };
    move: {
        type: StringConstructor;
        default: string;
    };
    moveDelay: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    maxNotifications: number;
    enter: string;
    enterFrom: string;
    enterTo: string;
    leave: string;
    leaveFrom: string;
    leaveTo: string;
    move: string;
    moveDelay: string;
}>;
export default _default;
