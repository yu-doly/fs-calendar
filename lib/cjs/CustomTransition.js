'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),styleInject_es=require('./style-inject.es-06def3b0.js');var script = {
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
};function render(_ctx, _cache, $props, $setup, $data, $options) {
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
}var css_248z = "";
styleInject_es.s(css_248z);script.render = render;exports.default=script;