export interface NotificationItem<T> {
    id?: number;
    title?: string;
    text: string;
    type: string;
    group?: string;
    speed?: number;
    data?: T;
    clean?: boolean;
}
export declare function notify<T>(notification: NotificationItem<T>, timeout: number): number;
