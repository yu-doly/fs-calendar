import { n as _objectSpread2, C as _toConsumableArray, o as createGuid } from './helpers-125bb300.js';
import { h } from 'vue';
import { j as childMixin, f as slotMixin } from './index-f38a9194.js';
import { s as script$2 } from './CalendarNav-68fd818f.js';
import { s as script$1 } from './Popover.vue_vue&type=style&index=0&id=23f8033a&lang-3f355886.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import { a as script$3, g as getPopoverTriggerEvents } from './CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-89f2112b.js';

var script = {
  name: 'CalendarPane',
  emits: ['update:page'],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    // Header
    var header = this.safeSlot('header', this.page) || // Default header
    h('div', {
      class: "vc-header align-".concat(this.titlePosition)
    }, [// Header title
    h('div', _objectSpread2({
      class: 'vc-title'
    }, this.navPopoverEvents), [this.safeSlot('header-title', this.page, this.page.title)]), // Navigation popover
    h(script$1, {
      id: this.navPopoverId,
      contentClass: 'vc-nav-popover-container'
    }, {
      // Navigation pane
      default: function _default() {
        return h(script$2, {
          value: _this.page,
          validator: _this.canMove,
          onInput: function onInput($event) {
            return _this.move($event);
          }
        }, _objectSpread2({}, _this.$slots));
      }
    })]); // Weeks

    var weeks = h('div', {
      class: 'vc-weeks'
    }, [].concat(_toConsumableArray(this.weekdayLabels.map(function (wl, i) {
      return h('div', {
        key: i + 1,
        class: 'vc-weekday'
      }, [wl]);
    })), _toConsumableArray(this.page.days.map(function (day) {
      return h(script$3, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        day: day,
        slots: _this.$slots
      }), _this.$slots);
    }))));
    return h('div', {
      class: 'vc-pane',
      ref: 'pane'
    }, [header, weeks]);
  },
  props: {
    page: Object,
    titlePosition: String,
    navVisibility: String,
    canMove: {
      type: Function,
      default: function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      navPopoverId: createGuid()
    };
  },
  computed: {
    navVisibility_: function navVisibility_() {
      return this.propOrDefault('navVisibility', 'navVisibility');
    },
    navPlacement: function navPlacement() {
      switch (this.titlePosition) {
        case 'left':
          return 'bottom-start';

        case 'right':
          return 'bottom-end';

        default:
          return 'bottom';
      }
    },
    navPopoverEvents: function navPopoverEvents() {
      return getPopoverTriggerEvents({
        id: this.navPopoverId,
        visibility: this.navVisibility_,
        placement: this.navPlacement,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom']
          }
        }],
        isInteractive: true,
        isRenderFn: true
      });
    },
    weekdayLabels: function weekdayLabels() {
      var _this2 = this;

      return this.locale.getWeekdayDates().map(function (d) {
        return _this2.format(d, _this2.masks.weekdays);
      });
    }
  },
  methods: {
    move: function move(page) {
      this.$emit('update:page', page);
    }
  }
};

var css_248z = ".vc-pane {\n  min-width: 250px;\n}\n.vc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 16px 0px 16px;\n}\n.vc-header.align-left {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-header.align-right {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-title {\n  font-size: var(--text-lg);\n  color: var(--gray-800);\n  font-weight: var(--font-semibold);\n  line-height: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n.vc-title:hover {\n    opacity: 0.75;\n}\n.vc-weeks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 6px;\n}\n.vc-weekday {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: var(--text-sm);\n  font-weight: var(--font-bold);\n  line-height: 14px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n  cursor: default;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-weekdays {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vc-nav-popover-container {\n  color: var(--white);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded-lg);\n  padding: 4px;\n  box-shadow: var(--shadow);\n}\n.vc-is-dark .vc-header {\n    color: var(--gray-200);\n}\n.vc-is-dark .vc-title {\n    color: var(--gray-100);\n}\n.vc-is-dark .vc-weekday {\n    color: var(--accent-200);\n}\n.vc-is-dark .vc-nav-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n";
styleInject(css_248z);

export { script as s };
