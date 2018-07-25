(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Schema = factory());
}(this, (function () { 'use strict';

    var inBrowser = typeof window !== 'undefined';

    function supportWebp() {
        if (!inBrowser) return false;

        let support = true;
        var d = document;

        try {
            var el = d.createElement('object');
            el.type = 'image/webp';
            el.style.visibility = 'hidden';
            el.innerHTML = '!';
            d.body.appendChild(el);
            support = !el.offsetWidth;
            d.body.removeChild(el);
        } catch (err) {
            support = false;
        }

        return support;
    }

    function install(Vue, options) {
        if (install.installed) {
            return;
        }
        install.installed = true;

        var directiveName = options.directiveName || 'src'; // 指令名字
        var filters = options.filters || {}; // 过滤器

        Vue.directive(directiveName, {
            bind: function bind(el, binding, vnode) {
                var src = binding.value;
                var filterNames = Object.keys(filters);
                var listener = {
                    el,
                    src,
                };
                filterNames.forEach(function(filterName) {
                    return filters[filterName](listener, {
                        supportWebp: supportWebp(),
                    });
                });
                var bindType = binding.arg;
                if (bindType) {
                    el.style[bindType] = 'url(' + listener.src + ')';
                } else {
                    el.setAttribute('src', listener.src);
                }
            },
        });
    }

    var index = {
        install: install,
    };

    return index;

})));
