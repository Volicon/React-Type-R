!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("type-r"),require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["type-r","react","prop-types"],e):"object"==typeof exports?exports.ReactMVx=e(require("type-r"),require("react"),require("prop-types")):t.ReactMVx=e(t.Nested,t.React,t[void 0])}(this,function(t,e,n){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){var e,n,r,s={},u=c.Record.defaults(t).prototype;return u.forEachAttr(u._attributes,function(t,u){if("id"!==u){var c=t.value,a=t.type,p=t.options;if(s[u]=i(a,p.isRequired),p._onChange&&(n||(n={}),n[u]=o(p._onChange)),p.changeHandlers&&p.changeHandlers.length&&(r||(r={}),r[u]=p.changeHandlers),p.changeEvents){r||(r={});var f=r[u]||(r[u]=[]),l="string"==typeof p.changeEvents?p.changeEvents:null;f.push(function(t,e,n){e&&n.stopListening(e),t&&n.listenTo(t,l||t._changeEventName,n.asyncUpdate)})}void 0!==c&&(e||(e={}),e[u]=t.convert(c,void 0,null,{}))}}),{propTypes:s,defaults:e,watchers:n,changeHandlers:r}}function o(t){return"function"==typeof t?t:function(e,n){this[t]&&this[t](e,n)}}function i(t,e){var n=s(t);return e?n.isRequired:n}function s(t){switch(t){case Number:case Number.integer:return u.number;case String:return u.string;case Boolean:return u.bool;case Array:return u.array;case Function:return u.func;case Object:return u.object;case a:return u.node;case p:return u.element;case void 0:case null:return u.any;default:return u.instanceOf(t)}}e.c=r,n.d(e,"b",function(){return a}),n.d(e,"a",function(){return p});var u=n(8),c=(n.n(u),n(0)),a=(n.n(c),function(){function t(){}return t}()),p=function(){function t(){}return t}()},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t,e){i.a.call(this,t,e),s.c.call(this,t,e),u.a.call(this,t,e),c.a.call(this,t,e),o.Messenger.onDefine.call(this,t,e)}e.c=r;var o=n(0),i=(n.n(o),n(6)),s=n(4),u=n(7),c=n(9),a=n(1);n.d(e,"b",function(){return a.b}),n.d(e,"a",function(){return a.a})},function(t,e,n){"use strict";function r(t,e){var n=this.prototype,r=t.state,a=t.State;if("function"==typeof r&&(a=r,r=void 0),r){var p=a||n.State||o.Record,f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.attributes=r,e=s([o.define],e)}(p);n.State=f}else a&&(n.State=a);(r||a)&&this.mixins.merge([u,c])}e.c=r,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c});var o=n(0),i=(n.n(o),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),s=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},u={_initializeState:function(){var t=this.state=this.props.__keepState||new this.State;t._owner=this,t._ownerKey="state"},context:{_nestedStore:o.Store},getStore:function(){var t,e;return(t=this.context)&&t._nestedStore||(e=this.state)&&e._defaultStore},componentWillUnmount:function(){var t=this.state;t._owner=t._ownerKey=void 0,this._preventDispose||t.dispose(),this.state=void 0}},c={_onChildrenChange:function(){},componentDidMount:function(){this._onChildrenChange=this.asyncUpdate}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"assignToState",function(){return a});var r=n(2),o=(n.n(r),n(0)),i=(n.n(o),n(3)),s=n(11),u=n(14);n.o(o,"define")&&n.d(e,"define",function(){return o.define}),n.o(o,"mixins")&&n.d(e,"mixins",function(){return o.mixins}),n.d(e,"Node",function(){return i.b}),n.d(e,"Element",function(){return i.a}),n.d(e,"Link",function(){return s.a}),n.d(e,"Component",function(){return u.a});var c=Object.create(r);c.default=c,c.define=o.define,c.mixins=o.mixins,c.Node=i.b.value(null),c.Element=i.a.value(null),c.Link=s.a,c.Component=u.a;var a=c.assignToState=function(t){return function(e){this.state.assignFrom((n={},n[t]=e&&e instanceof s.a?e.value:e,n));var n}};e.default=c},function(t,e,n){"use strict";function r(t,e){var n=t.store,r=t.Store;if(n&&n instanceof o.Store)e.prototype.store=n,e.mixins.merge([a,c]);else if(n||t.Store){if("function"==typeof n&&(r=n,n=void 0),n){var f=r||e.prototype.Store||o.Store,l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.attrbutes=n,e=u([o.define],e)}(f);e.prototype.Store=l}else r&&(e.prototype.Store=r);e.mixins.merge([p,i.b,c])}}e.a=r;var o=n(0),i=(n.n(o),n(4)),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},c={childContext:{_nestedStore:o.Store},getChildContext:function(){return{_nestedStore:this.store}},getStore:function(){return this.store},get:function(t){var e=i.a.getStore.call(this,t);return e&&e.get(t)}},a={componentDidMount:function(){this.listenTo(this.store,"change",this.asyncUpdate)}},p={componentWillMount:function(){var t=this.store=new this.Store;t._owner=this,t._ownerKey="store"},componentWillUnmount:function(){this.store._ownerKey=this.store._owner=void 0,this.store.dispose(),this.store=void 0}}},function(t,e,n){"use strict";function r(t,e){var n=t.context,r=t.childContext,s=this.prototype;n&&(s._context=i.tools.defaults(n,e.prototype._context||{}),this.contextTypes=Object(o.c)(n).propTypes),r&&(s._childContext=i.tools.defaults(r,e.prototype._childContext),this.childContextTypes=Object(o.c)(r).propTypes)}e.a=r;var o=n(1),i=n(0);n.n(i)},function(t,e){t.exports=n},function(t,e,n){"use strict";function r(t,e){var n=t.props,r=t.pureRender,o=this.prototype;if(n){o._props=u.tools.defaults(n,e.prototype._props||{});var p=Object(i.c)(n),f=p.propTypes,l=p.defaults,h=p.watchers,d=p.changeHandlers;this.propTypes=f,l&&(this.defaultProps=l),h&&(o._watchers=h,this.mixins.merge([a])),d&&(o._changeHandlers=d,this.mixins.merge([c])),o.pureRender&&(o.PropsChangeTokens=Object(s.b)(n))}r&&this.mixins.merge([s.a])}function o(t,e,n){var r=t._changeHandlers;for(var o in r)if(e[o]!==n[o])for(var i=0,s=r[o];i<s.length;i++){var u=s[i];u(n[o],e[o],t)}}e.a=r;var i=n(1),s=n(10),u=n(0),c=(n.n(u),{componentDidMount:function(){o(this,{},this.props)},componentDidUpdate:function(t){o(this,t,this.props)},componentWillUnmount:function(){o(this,this.props,{})}}),a={componentWillReceiveProps:function(t){var e=this,n=e._watchers,r=e.props;for(var o in n)t[o]!==r[o]&&n[o].call(this,t[o],o)},componentWillMount:function(){var t=this,e=t._watchers,n=t.props;for(var r in e)e[r].call(this,n[r],r)}}},function(t,e,n){"use strict";function r(t){var e=Object.keys(t),n=new Function("p","s","\n        var v;\n        this._s = s && s._changeToken;\n        "+e.map(function(t){return"\n            this."+t+" = ( ( v = p."+t+") && v._changeToken ) || v;\n        "})+"\n    ");return n.prototype._hasChanges=new Function("p","s","\n        var v;\n        return ( s && s._changeToken !== this._s ) "+e.map(function(t){return" ||\n            this."+t+" !== ( ( ( v = p."+t+") && v._changeToken ) || v )\n        "})+";\n    "),n}function o(){this._propsChangeTokens=new this.PropsChangeTokens(this.props,this.state)}e.b=r,n.d(e,"a",function(){return i});var i={shouldComponentUpdate:function(t){return this._propsChangeTokens._hasChanges(t)},componentDidMount:o,componentDidUpdate:o}},function(t,e,n){"use strict";function r(t){return t._links||(t._links=new t.AttributesCopy({}))}function o(t,e,n){var r=t[n],o=e[n];return r&&r.value===o?r:t[n]=new c(e,n,o)}var i=n(0),s=(n.n(i),n(12)),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.a=s.a,i.Mixable.mixins.populate(s.a),i.Record.mixins.merge([{linkAt:function(t){return o(r(this),this,t)},linkPath:function(t,e){return new a(this,t,e)},linkAll:function(){var t=r(this);if(arguments.length)for(var e=0;e<arguments.length;e++)o(t,this,arguments[e]);else{var n=this.attributes;for(var i in n)void 0===n[i]||o(t,this,i)}return t}}]);var c=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.record=e,o.attr=n,o}return u(e,t),e.prototype.set=function(t){this.record[this.attr]=t},Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error?this.record.getValidationError(this.attr):this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),e}(s.a),a=function(t){function e(e,n,r){var o=t.call(this,e.deepGet(n))||this;return o.record=e,o.path=n,o.options=r,o}return u(e,t),Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error&&(this._error=this.record.deepValidationError(this.path)||null),this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_changeToken",{get:function(){return this.record._changeToken},enumerable:!0,configurable:!0}),e.prototype.set=function(t){this.record.deepSet(this.path,t,this.options)},e}(s.a);i.Record.Collection.mixins.merge([{linkContains:function(t){return new p(this,t)},linkAt:function(t){var e=this;return s.a.value(this[t],function(n){return e[t]=n})}}]);var p=function(t){function e(e,n){var r=t.call(this,Boolean(e._byId[n.cid]))||this;return r.collection=e,r.record=n,r}return u(e,t),e.prototype.set=function(t){this.collection.toggle(this.record,t)},e}(s.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(13),o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=function(){function t(t){this.value=t}return t.value=function(t,e){return new s(t,e)},Object.defineProperty(t.prototype,"validationError",{get:function(){return this.error},enumerable:!0,configurable:!0}),t.prototype.onChange=function(t){var e=this;return new u(this,function(n){t(n),e.set(n)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.requestChange=function(t){this.set(t)},t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new u(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new c(this,t)},t.prototype.enabled=function(t){return new a(this,t||"")},t.prototype.contains=function(t){return new p(this,t)},t.prototype.push=function(){var t=r.a.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=r.a.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=r.a.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return Object(r.b)(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=Object(r.b)(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new l(this,t)},t.prototype.clone=function(){var t=this.value;return Object(r.b)(t).clone(t)},t.prototype.pick=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];t[n]=new l(this,n)}return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||f),this},t}(),s=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return o(e,t),e.prototype.set=function(t){},e}(i),u=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return o(e,t),e.prototype.set=function(t){},e}(i),c=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return o(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(i),a=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return o(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(i),p=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return o(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(i),f="Invalid value",l=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return o(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(i)},function(t,e,n){"use strict";function r(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case o:return c;case i:return u}return s}e.b=r,n.d(e,"a",function(){return c});var o=Array.prototype,i=Object.prototype,s={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},u={map:function(t,e){var n=[];for(var r in t.value){var o=e(t.at(r),r);void 0===o||n.push(o)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){var e={};for(var n in t)e[n]=t[n];return e}},c={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,i=0;o<n;o++){var s=e(t.at(o),o);void 0===s||(r[i++]=s)}return r.length===i||(r.length=i),r}}},function(t,e,n){"use strict";function r(){return!1}n.d(e,"a",function(){return a});var o=n(2),i=(n.n(o),n(0)),s=(n.n(i),n(3)),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r._initializeState(),r}return u(e,t),e.prototype.linkAt=function(t){return this.state.linkAt(t)},e.prototype.linkAll=function(){var t=this.state;return t.linkAll.apply(t,arguments)},e.prototype.linkPath=function(t){return this.state.linkPath(t)},Object.defineProperty(e.prototype,"links",{get:function(){return this.state._links},enumerable:!0,configurable:!0}),e.prototype._initializeState=function(){this.state=null},e.prototype.assignToState=function(t,e){this.state.assignFrom((n={},n[e]=t,n));var n},e.prototype.componentWillUnmount=function(){this.dispose()},e.prototype.transaction=function(t){var e=this.shouldComponentUpdate,n=e!==r;n&&(this.shouldComponentUpdate=r);var o=this,i=o.state,s=o.store,u=s?function(e){return s.transaction(function(){return t(e)})}:t;i?i.transaction(u):u(i),n&&(this.shouldComponentUpdate=e,this.asyncUpdate())},e.prototype.asyncUpdate=function(){this.shouldComponentUpdate===r||this._disposed||this.forceUpdate()},e.onDefine=s.c,e=c([i.define,Object(i.definitions)({state:i.mixinRules.merge,State:i.mixinRules.value,store:i.mixinRules.merge,Store:i.mixinRules.value,props:i.mixinRules.merge,context:i.mixinRules.merge,childContext:i.mixinRules.merge,pureRender:i.mixinRules.protoValue}),Object(i.mixinRules)({componentWillMount:i.mixinRules.classLast,componentDidMount:i.mixinRules.classLast,componentWillReceiveProps:i.mixinRules.classLast,componentWillUpdate:i.mixinRules.classLast,componentDidUpdate:i.mixinRules.classLast,componentWillUnmount:i.mixinRules.classFirst,shouldComponentUpdate:i.mixinRules.some,getChildContext:i.mixinRules.defaults}),Object(i.mixins)(i.Messenger)],e)}(o.Component);Object.defineProperty(a.prototype,"isMounted",{value:function(){return!this._disposed}})}])});
//# sourceMappingURL=index.js.map