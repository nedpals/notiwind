export interface NotificationItem {
    id?: number;
    title?: string;
    text: string;
    type: string;
    group?: string;
    speed?: number;
    data?: any;
    clean?: boolean;
}
export declare const notify: (notification: NotificationItem, timeout: number) => number;
