(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CustomTransition = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'CustomTransition',
    emits: ['before-enter', 'before-transition', 'after-enter', 'after-transition'],
    props: {
      name: String,
      appear: Boolean
    },
    computed: {
      name_: function name_() {
        return "vc-".concat(this.name || 'none');
      }
    },
    methods: {
      beforeEnter: function beforeEnter(el) {
        this.$emit('before-enter', el);
        this.$emit('before-transition', el);
      },
      afterEnter: function afterEnter(el) {
        this.$emit('after-enter', el);
        this.$emit('after-transition', el);
      }
    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $options.name_,
      appear: $props.appear,
      onBeforeEnter: $options.beforeEnter,
      onAfterEnter: $options.afterEnter
    }, {
      default: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "default")];
      }),
      _: 3
    }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "";
  styleInject(css_248z);

  script.render = render;

  exports.default = script;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
