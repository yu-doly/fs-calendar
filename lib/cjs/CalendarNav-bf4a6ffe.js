'use strict';var helpers=require('./helpers-367e19e6.js'),vue=require('vue'),index=require('./index-021267b8.js'),styleInject_es=require('./style-inject.es-06def3b0.js'),SvgIcon=require('./SvgIcon.js');/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

var head_1 = head;var _yearGroupCount = 12;
var script = {
  name: 'CalendarNav',
  emits: ['input'],
  components: {
    SvgIcon: SvgIcon['default']
  },
  mixins: [index.j],
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          month: 0,
          year: 0
        };
      }
    },
    validator: {
      type: Function,
      default: function _default() {
        return function () {
          return true;
        };
      }
    }
  },
  data: function data() {
    return {
      monthMode: true,
      yearIndex: 0,
      yearGroupIndex: 0,
      onSpaceOrEnter: helpers.B
    };
  },
  computed: {
    month: function month() {
      return this.value ? this.value.month || 0 : 0;
    },
    year: function year() {
      return this.value ? this.value.year || 0 : 0;
    },
    title: function title() {
      return this.monthMode ? this.yearIndex : "".concat(this.firstYear, " - ").concat(this.lastYear);
    },
    monthItems: function monthItems() {
      var _this = this;

      var _this$pageForDate = this.pageForDate(new Date()),
          thisMonth = _this$pageForDate.month,
          thisYear = _this$pageForDate.year;

      return this.locale.getMonthDates().map(function (d, i) {
        var month = i + 1;
        return {
          label: _this.locale.format(d, _this.masks.navMonths),
          ariaLabel: _this.locale.format(d, 'MMMM YYYY'),
          isActive: month === _this.month && _this.yearIndex === _this.year,
          isCurrent: month === thisMonth && _this.yearIndex === thisYear,
          isDisabled: !_this.validator({
            month: month,
            year: _this.yearIndex
          }),
          click: function click() {
            return _this.monthClick(month);
          }
        };
      });
    },
    yearItems: function yearItems() {
      var _this2 = this;

      var _this$pageForDate2 = this.pageForDate(new Date()),
          thisYear = _this$pageForDate2.year;

      var startYear = this.yearGroupIndex * _yearGroupCount;
      var endYear = startYear + _yearGroupCount;
      var items = [];

      var _loop = function _loop(year) {
        items.push({
          year: year,
          label: year,
          ariaLabel: year,
          isActive: year === _this2.year,
          isCurrent: year === thisYear,
          isDisabled: !_this2.validator({
            month: _this2.month,
            year: year
          }),
          click: function click() {
            return _this2.yearClick(year);
          }
        });
      };

      for (var year = startYear; year < endYear; year += 1) {
        _loop(year);
      }

      return items;
    },
    activeItems: function activeItems() {
      return this.monthMode ? this.monthItems : this.yearItems;
    },
    firstYear: function firstYear() {
      return head_1(this.yearItems.map(function (i) {
        return i.year;
      }));
    },
    lastYear: function lastYear() {
      return helpers.p(this.yearItems.map(function (i) {
        return i.year;
      }));
    }
  },
  watch: {
    year: function year() {
      this.yearIndex = this.year;
    },
    yearIndex: function yearIndex(val) {
      this.yearGroupIndex = this.getYearGroupIndex(val);
    }
  },
  created: function created() {
    this.yearIndex = this.year;
  },
  methods: {
    getItemClasses: function getItemClasses(_ref) {
      var isActive = _ref.isActive,
          isCurrent = _ref.isCurrent,
          isDisabled = _ref.isDisabled;
      var classes = ['vc-nav-item'];

      if (isActive) {
        classes.push('is-active');
      } else if (isCurrent) {
        classes.push('is-current');
      }

      if (isDisabled) {
        classes.push('is-disabled');
      }

      return classes;
    },
    getYearGroupIndex: function getYearGroupIndex(year) {
      return Math.floor(year / _yearGroupCount);
    },
    monthClick: function monthClick(month) {
      this.$emit('input', {
        month: month,
        year: this.yearIndex
      });
    },
    yearClick: function yearClick(year) {
      this.yearIndex = year;
      this.monthMode = true;
    },
    toggleMode: function toggleMode() {
      this.monthMode = !this.monthMode;
    },
    movePrev: function movePrev() {
      if (this.monthMode) {
        this.movePrevYear();
      }

      this.movePrevYearGroup();
    },
    moveNext: function moveNext() {
      if (this.monthMode) {
        this.moveNextYear();
      }

      this.moveNextYearGroup();
    },
    movePrevYear: function movePrevYear() {
      this.yearIndex--;
    },
    moveNextYear: function moveNextYear() {
      this.yearIndex++;
    },
    movePrevYearGroup: function movePrevYearGroup() {
      this.yearGroupIndex--;
    },
    moveNextYearGroup: function moveNextYearGroup() {
      this.yearGroupIndex++;
    }
  }
};var _hoisted_1 = {
  class: "vc-nav-container"
};
var _hoisted_2 = {
  class: "vc-nav-header"
};
var _hoisted_3 = {
  class: "vc-nav-items"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_icon = vue.resolveComponent("svg-icon");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, [vue.createVNode("span", {
    role: "button",
    class: "vc-nav-arrow is-left",
    tabindex: "0",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.movePrev.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function (e) {
      return $data.onSpaceOrEnter(e, $options.movePrev);
    })
  }, [vue.renderSlot(_ctx.$slots, "nav-left-button", {}, function () {
    return [vue.createVNode(_component_svg_icon, {
      name: "left-arrow",
      width: "20px",
      height: "24px"
    })];
  })], 32), vue.createVNode("span", {
    role: "button",
    class: "vc-nav-title vc-grid-focus",
    style: {
      whiteSpace: 'nowrap'
    },
    tabindex: "0",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.toggleMode.apply($options, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = function (e) {
      return $data.onSpaceOrEnter(e, $options.toggleMode);
    })
  }, vue.toDisplayString($options.title), 33), vue.createVNode("span", {
    role: "button",
    class: "vc-nav-arrow is-right",
    tabindex: "0",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.moveNext.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function (e) {
      return $data.onSpaceOrEnter(e, $options.moveNext);
    })
  }, [vue.renderSlot(_ctx.$slots, "nav-right-button", {}, function () {
    return [vue.createVNode(_component_svg_icon, {
      name: "right-arrow",
      width: "20px",
      height: "24px"
    })];
  })], 32)]), vue.createVNode("div", _hoisted_3, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.activeItems, function (item) {
    return vue.openBlock(), vue.createBlock("span", {
      key: item.label,
      role: "button",
      "aria-label": item.ariaLabel,
      class: $options.getItemClasses(item),
      tabindex: item.isDisabled ? undefined : 0,
      onClick: item.click,
      onKeydown: function onKeydown(e) {
        return $data.onSpaceOrEnter(e, item.click);
      }
    }, vue.toDisplayString(item.label), 43, ["aria-label", "tabindex", "onClick", "onKeydown"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}var css_248z = "";
styleInject_es.s(css_248z);script.render = render;exports.h=head_1;exports.s=script;