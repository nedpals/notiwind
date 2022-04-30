import { InjectionKey } from "@vue/runtime-core";
export declare const contextKey: InjectionKey<{
    group: string;
    position: string;
}>;
declare const _default: import("@vue/runtime-core").DefineComponent<{
    group: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (this: void, value: string) => boolean;
    };
}, void, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, Record<string, any>, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<import("@vue/runtime-core").ExtractPropTypes<{
    group: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (this: void, value: string) => boolean;
    };
}>>, {
    group: string;
    position: string;
}>;
export default _default;
