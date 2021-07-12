window._doms = {};
window.define = function(name, dependents, func) {
    if (dependents && dependents.length > 0) {
        window._doms[name] = {
            name,
            dependents,
            func,
        };
    } else {
        window._doms[name] = { name, func };
    }
};
window.$getComponent = function(name, target) {
    return window._doms[name].func(target);
};

class ExtendCustomStore {
    constructor(store, options) {
        this.store = store;
        this.options = options;
        return this;
    }
    install(name) {
        this.store.registerModule([name], this.options.data());
        let obj = this.options.mixin();
        for (let n in obj) {
            if (n !== "data") this[n] = obj[n];
        }
        return this;
    }
    uninstall(name) {
        this.store.unregisterModule([name]);
        return this;
    }
}

export const done = function(Vue, common) {
    Vue.prototype.$loadFile = common.loadFile;
    Vue.prototype.$addModel = Vue.$addModel = function(getData) {
        let that = this,
            extendMod = function(dom, router) {
                let mod = window.$getComponent(dom.id, Vue);
                router.component = mod.component;
                that.$router.addRoute(router);
                if (mod.store) {
                    Vue.prototype["$" + mod.name] = Vue["$" + mod.name] =
                        new ExtendCustomStore(that.$store, mod.store).install(mod.name);
                }
            };
        return new Promise((resolve, reject) => {
            common.isPromise(getData) &&
                getData
                .then((v) => {
                    let routes = v.data.router;
                    v.data.router.forEach((router, i) => {
                        that
                            .$loadFile(router.component, i)
                            .then((dom) => {
                                let obj = window._doms[dom.id];
                                if (obj.dependents) {
                                    obj.dependents.forEach((depend, i) => {
                                        obj.dependents[i] = new Promise((resolve, reject) => {
                                            that
                                                .$loadFile({ path: depend, name: depend }, i)
                                                .then((dom) => resolve(dom))
                                                .catch((v) => reject(v));
                                        });
                                    });
                                    Promise.all(obj.dependents)
                                        .then(() => {
                                            extendMod(dom, router);
                                            routes.splice(dom.index, 1);
                                            if (routes.length <= 0) {
                                                resolve();
                                            }
                                        })
                                        .catch((v) => {
                                            console.log(v);
                                            reject(v);
                                        });
                                } else {
                                    extendMod(dom, router);
                                    routes.splice(dom.index, 1);
                                    if (routes.length <= 0) {
                                        resolve();
                                    }
                                }
                            })
                            .catch((v) => {
                                console.log(v);
                                reject(v);
                            });
                    });
                })
                .catch((v) => {
                    that.$message && that.$message(v);
                    console.log(v);
                    reject(v);
                });
        });
    };
};