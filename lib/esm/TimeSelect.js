import { openBlock, createBlock, createVNode, mergeProps, Fragment, renderList, toDisplayString } from 'vue';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var script = {
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    options: Array,
    modelValue: null
  }
};

var _hoisted_1 = {
  class: "vc-select"
};

var _hoisted_2 = /*#__PURE__*/createVNode("div", {
  class: "vc-select-arrow"
}, [/*#__PURE__*/createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/createVNode("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("select", mergeProps(_ctx.$attrs, {
    value: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }), [(openBlock(true), createBlock(Fragment, null, renderList($props.options, function (option) {
    return openBlock(), createBlock("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, toDisplayString(option.label), 9, ["value", "disabled"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16, ["value"]), _hoisted_2]);
}

var css_248z = "";
styleInject(css_248z);

script.render = render;

export default script;
