/**
 * React-Type-R component base class. Overrides React component.
 */
import * as React from 'react';
import { CallbacksByEvents, Messenger, Record, Store } from 'type-r';
import onDefine, { TypeSpecs } from './define';
import Link from './link';
export declare class Component<P, S extends Record = Record> extends React.Component<P, S> {
    cid: string;
    static state?: TypeSpecs | typeof Record;
    static store?: TypeSpecs | typeof Store;
    static props?: TypeSpecs;
    static context?: TypeSpecs;
    static childContext?: TypeSpecs;
    static pureRender?: boolean;
    private static propTypes;
    private static defaultProps;
    private static contextTypes;
    private static childContextTypes;
    private PropsChangeTokens;
    static extend: (spec: object, statics?: object) => Component<any>;
    linkAt(key: string): Link<any>;
    linkAll(...keys: string[]): {
        [key: string]: Link<any>;
    };
    linkPath(path: string): Link<any>;
    readonly links: any;
    static onDefine: typeof onDefine;
    readonly state: S;
    readonly store?: Store;
    constructor(props?: any, context?: any);
    _initializeState(): void;
    assignToState(x: any, key: string): void;
    setState(attrs: object | ((state: S, props: P) => object)): void;
<<<<<<< HEAD
=======
    isMounted: () => boolean;
>>>>>>> develop
    on: (events: string | CallbacksByEvents, callback: any, context?: any) => this;
    once: (events: string | CallbacksByEvents, callback: any, context?: any) => this;
    off: (events?: string | CallbacksByEvents, callback?: any, context?: any) => this;
    trigger: (name: string, a?: any, b?: any, c?: any, d?: any, e?: any) => this;
    stopListening: (source?: Messenger, a?: string | CallbacksByEvents, b?: Function) => this;
    listenTo: (source: Messenger, a: string | CallbacksByEvents, b?: Function) => this;
    listenToOnce: (source: Messenger, a: string | CallbacksByEvents, b?: Function) => this;
    dispose: () => void;
    componentWillUnmount(): void;
    /**
     * Performs transactional update for both props and state.
     * Suppress updates during the transaction, and force update aftewards.
     * Wrapping the sequence of changes in a transactions guarantees that
     * React component will be updated _after_ all the changes to the
     * both props and local state are applied.
     */
    transaction(fun: (state?: Record) => void): void;
    shouldComponentUpdate(): boolean;
    asyncUpdate(): void;
    private _silent;
    isMounted: () => boolean;
}
