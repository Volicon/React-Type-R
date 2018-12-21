import { Record, Store } from 'type-r';
import { Component } from './component';
/**
 * Connect Store class to the component and expose it to the component subtree.
 * @param StoreClass
 * @param ComponentClass
 */
export declare function localStoreComponent<S extends typeof Store>(StoreClass: S, ComponentClass: (props: {
    store?: InstanceType<S>;
} & {
    [name: string]: any;
}) => any): typeof Component;
export declare function localStoreComponent<S extends typeof Store>(StoreClass: S, ComponentClass: Function): typeof Component;
/**
 * Connect external store.
 * @param store
 * @param ComponentClass
 */
export declare function externalStoreComponent<S extends Store, P>(store: S, ComponentClass: Function): typeof Component;
export declare class PureComponent<P extends object, S extends Record = Record> extends Component<P, S> {
    static pureRender: boolean;
}
