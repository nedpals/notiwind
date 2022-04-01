declare const _default: import("@vue/runtime-core").DefineComponent<{
    group: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
}, unknown, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, Record<string, any>, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<import("@vue/runtime-core").ExtractPropTypes<{
    group: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
}>>, {
    group: string;
    position: string;
}>;
export default _default;
