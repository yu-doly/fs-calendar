'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),styleInject_es=require('./style-inject.es-06def3b0.js');var script = {
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    options: Array,
    modelValue: null
  }
};var _hoisted_1 = {
  class: "vc-select"
};

var _hoisted_2 = /*#__PURE__*/vue.createVNode("div", {
  class: "vc-select-arrow"
}, [/*#__PURE__*/vue.createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/vue.createVNode("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("select", vue.mergeProps(_ctx.$attrs, {
    value: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }), [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.options, function (option) {
    return vue.openBlock(), vue.createBlock("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, vue.toDisplayString(option.label), 9, ["value", "disabled"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16, ["value"]), _hoisted_2]);
}var css_248z = "";
styleInject_es.s(css_248z);script.render = render;exports.default=script;